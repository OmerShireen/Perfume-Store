import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './ProductList.module.css'; // Optional CSS for styling

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products'); // Replace with your backend URL
        setProducts(response.data); // Store the data in state
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };
    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    // Navigate to the product details page and pass product data
    navigate(`/product-details/${product.id}`, { state: { product } });
  };

  return (
    <div className={styles.productContainer}>
      {products.map((product) => (
        <div
          key={product.id}
          className={styles.product}
          onClick={() => handleProductClick(product)}
          style={{ cursor: 'pointer' }}
        >
          <img src={product.image_url} alt={product.title} className={styles.productImage} />
          <h3>{product.title}</h3>
          <p><strong>Price:</strong> Rs.{product.price}</p>
        </div>
      ))}
    </div>
  );
}
