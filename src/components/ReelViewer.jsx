import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import ReactPlayer from "react-player";
import { motion, AnimatePresence } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import ProductScrollbar from "./ProductScrollbar";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-circular-progressbar/dist/styles.css";
import "./ReelViewer.css";
import { FiHeart, FiBookmark, FiShare } from 'react-icons/fi';
// import { motion, AnimatePresence } from 'framer-motion';

const ReelViewer = ({ look, onComplete, isActive }) => {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showProductCard, setShowProductCard] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const playerRef = useRef(null);
  const timerRef = useRef(null);
  const [userInteracting, setUserInteracting] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const handleSave = (e) => {
    e.stopPropagation();
    setSaved(!saved);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    setShowShareToast(true);
    setTimeout(() => {
      setShowShareToast(false);
    }, 3000);
  };

  // Control video playback based on active state
  useEffect(() => {
    setPlaying(isActive);

    // Reset progress when becoming active
    if (isActive && look.type === "image") {
      setProgress(0);
    }
  }, [isActive, look.type]);

  const handleUserInteractionStart = () => {
    setUserInteracting(true);
    // Clear any existing timer to prevent auto-scrolling
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleUserInteractionEnd = () => {
    // Set a small delay before allowing auto-scrolling again
    setTimeout(() => {
      setUserInteracting(false);
    }, 5000); // 5 seconds delay
  };

  useEffect(() => {
    if (look.type === "image" && isActive && !userInteracting) {
      // For images, use a 5-second timer
      const startTime = Date.now();
      const duration = 5000; // 5 seconds

      // Clear any existing timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      timerRef.current = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(newProgress);

        if (newProgress >= 100) {
          clearInterval(timerRef.current);
          if (onComplete) onComplete();
        }
      }, 50);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [look, onComplete, isActive]);

  const handleVideoProgress = ({ played }) => {
    setProgress(played * 100);
  };

  const handleVideoEnded = () => {
    // When video ends, trigger the onComplete callback
    if (onComplete) onComplete();
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setMuted(!muted);
  };

  const handleProductClick = async (product) => {
    // console.log(product);
    await setSelectedProduct(product);
    await setShowProductCard(true);
  };

  const handleCloseProductCard = () => {
    setShowProductCard(false);
  };

  return (
    <div
      className="reel-viewer"
      onTouchStart={handleUserInteractionStart}
      onMouseDown={handleUserInteractionStart}
      onTouchEnd={handleUserInteractionEnd}
      onMouseUp={handleUserInteractionEnd}
    >
      {look.type === "video" ? (
        <div className="video-container">
          <ReactPlayer
            ref={playerRef}
            url={look.src}
            width="100%"
            height="100%"
            playing={playing}
            muted={muted}
            loop={true} // Enable looping for videos
            onProgress={handleVideoProgress}
            onEnded={handleVideoEnded}
            playsinline
          />

          <div className="video-controls">
            <button className="mute-button" onClick={toggleMute}>
              {muted ? <FiVolumeX /> : <FiVolume2 />}
            </button>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <ProductScrollbar
            products={look.products}
            onProductClick={handleProductClick}
          />
        </div>
      ) : (
        <div className="image-container">
          <img src={look.src} alt={look.title} />

          {look.annotations.map((annotation) => (
            <div
              key={annotation.id}
              className="annotation-dot"
              style={{ left: `${annotation.x}%`, top: `${annotation.y}%` }}
              onClick={() => handleProductClick(annotation.product)}
            />
          ))}

          <div className="progress-indicator">
            <CircularProgressbar
              value={progress}
              styles={buildStyles({
                pathColor: "#fff",
                trailColor: "rgba(255, 255, 255, 0.3)",
              })}
            />
          </div>
          <ProductScrollbar
            products={look.annotations.map((annotation) => annotation.product)}
            onProductClick={handleProductClick}
          />
        </div>
      )}

      <ProductCard
        product={selectedProduct}
        isVisible={showProductCard}
        onClose={handleCloseProductCard}
      />
      <div className="lookbook-actions">
        <motion.button
          className="action-button"
          onClick={handleLike}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={liked ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.4 }}
          >
            {liked ? (
              <FiHeart className="active"/>
            ) : (
              <FiHeart />
            )}
          </motion.div>
          <span>2k</span>
        </motion.button>

        <motion.button
          className="action-button"
          onClick={handleSave}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={saved ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.4 }}
          >
            {saved ? (
               <FiBookmark className="active"/>
            ) : (
              <FiBookmark />
            )}
          </motion.div>
          <span>500</span>
        </motion.button>

        <motion.button
          className="action-button"
          onClick={handleShare}
          whileTap={{ scale: 0.9 }}
        >
          <FiShare />
        </motion.button>
      </div>

      {showShareToast && (
        <motion.div
          className="toast-notification share-toast"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          Video is shared, thanks for sharing
        </motion.div>
      )}
    </div>
  );
};

export default ReelViewer;
