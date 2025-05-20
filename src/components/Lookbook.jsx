import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper/modules';
import Header from './Header';
import ReelViewer from './ReelViewer';
import data from '../data/data';
import { FiHeart, FiBookmark, FiShare } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import './Lookbook.css';

const Lookbook = () => {
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const [showLookbook, setShowLookbook] = useState(true);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const swiperRef = useRef(null);

  const handleNextLook = () => {
    if (activeLookIndex < data.looks.length - 1) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevLook = () => {
    if (activeLookIndex > 0) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleClose = () => {
    setShowLookbook(false);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleShare = () => {
    setShowShareToast(true);
    setTimeout(() => {
      setShowShareToast(false);
    }, 3000);
  };

  if (!showLookbook) {
    return (
      <div className="lookbook-closed">
        <button onClick={() => setShowLookbook(true)}>Open Lookbook</button>
      </div>
    );
  }

  return (
    <div className="lookbook-container">
      <Header />

      <div className="lookbook-content">
        <Swiper
          ref={swiperRef}
          modules={[Virtual]}
          direction="vertical"
          slidesPerView={1}
          virtual
          onSlideChange={(swiper) => setActiveLookIndex(swiper.activeIndex)}
          className="look-swiper"
        >
          {data.looks.map((look, index) => (
            <SwiperSlide key={look.id} virtualIndex={index}>
              <ReelViewer 
                look={look} 
                onComplete={handleNextLook} 
                isActive={index === activeLookIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

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
            {liked ? 
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg> : 
              <FiHeart />
            }
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
            {saved ? 
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg> : 
              <FiBookmark />
            }
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

      <AnimatePresence>
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
      </AnimatePresence>
    </div>
  );
};

export default Lookbook;
