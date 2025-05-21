import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper/modules';
import Header from './Header';
import ReelViewer from './ReelViewer';
import data from '../data/data';
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

    </div>
  );
};

export default Lookbook;
