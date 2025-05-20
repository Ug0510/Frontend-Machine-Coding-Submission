import React, { useState } from 'react';
import { FiX, FiShoppingBag } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [showToast, setShowToast] = useState(false);

  const handleBagClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <header className="app-header">
      <button className='icon-back'>
        <FiX />
      </button>
      
      <button className='icon-back'  onClick={handleBagClick}>
        <FiShoppingBag />
      </button>
      
      <AnimatePresence>
        {showToast && (
          <motion.div 
            className="toast-notification"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            Bag is empty now, come later
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
