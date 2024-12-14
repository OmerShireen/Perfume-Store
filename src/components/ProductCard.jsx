import React from 'react';
import './ProductCard.css'; // CSS file for styling

export default function ProductCard() {
  return (
    <div className="product-card">
      {/* Product Image */}
      <img
        src="src/components/BLACK-SILVER.jpg" // Replace with your product image URL
        alt="Black And Silver Premium Attars"
        className="product-image"
      />

      {/* Product Details */}
      <div className="product-details">
        <h3 className="product-title">Black And Silver | Premium Attars | 12ml</h3>

        {/* Rating Section */}
        <div className="product-rating">
          <span className="stars">★★★★★</span>
          <span className="rating-count">(1116)</span>
        </div>

        {/* Best Seller Tag */}
        <p className="product-tag">Our Best Seller 🔥</p>

        {/* Product Price */}
        <p className="product-price">Rs. 2,000.00</p>
      </div>
    </div>
  );
}
