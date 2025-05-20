import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductCard.css';

const ProductCard = ({ product, isVisible, onClose }) => {
  const navigate = useNavigate();

  const handleShopClick = (e) => {
    e.stopPropagation();
    // Navigate to product detail page with product ID
    navigate(`/product/${product.id}`);
  };

  return (
    <AnimatePresence>
      {isVisible && product && (
        <motion.div 
          className="product-card-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="product-detail-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={onClose}>×</button>
            <div className="product-detail-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-detail-info">
              <h3>{product.name}</h3>
              <p className="detail-price">₹{product.price}</p>
              <p className="description">{product.description}</p>
              <button 
                className="detail-shop-button"
                onClick={handleShopClick}
              >
                SHOP
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductCard;
