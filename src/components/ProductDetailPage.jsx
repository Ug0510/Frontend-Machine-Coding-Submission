import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import { motion } from 'framer-motion';
import data from '../data/data';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Simulate fetching product data from JSON
    const fetchProduct = () => {
      setLoading(true);
      
      // Find the product in our data
      let foundProduct = null;
      
      // Search through all looks and their products
      data.looks.forEach(look => {
        if (look.type === 'video') {
          // Check products in video
          const found = look.products.find(p => p.id === parseInt(productId));
          if (found) foundProduct = found;
        } else {
          // Check products in annotations for images
          look.annotations.forEach(annotation => {
            if (annotation.product.id === parseInt(productId)) {
              foundProduct = annotation.product;
            }
          });
        }
      });
      
      setTimeout(() => {
        setProduct(foundProduct);
        setLoading(false);
      }, 500); 
    };
    
    fetchProduct();
  }, [productId]);

  const handleAddToBag = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  if (loading) {
    return (
      <div className="product-detail-page loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-page error">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/')}>Back to Lookbook</button>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <header className="product-detail-header">
        <button className="icon-button" onClick={() => navigate('/')}>
          <FiArrowLeft />
        </button>
        <h1>Product Details</h1>
        <button className="icon-button" onClick={handleAddToBag}>
          <FiShoppingBag />
        </button>
      </header>

      <div className="product-detail-content">
        <div className="product-detail-image-container">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-detail-info-container">
          <h2>{product.name}</h2>
          <p className="product-detail-price">₹{product.price}</p>
          <div className="product-detail-description">
            <p>{product.description}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
          </div>
          
          <div className="product-detail-actions">
            <button className="add-to-bag-button" onClick={handleAddToBag}>
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>

      {showToast && (
        <motion.div 
          className="toast-notification"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          Product added to bag
        </motion.div>
      )}
    </div>
  );
};

export default ProductDetailPage;
