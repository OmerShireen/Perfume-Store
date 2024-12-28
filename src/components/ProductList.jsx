import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Product.module.css'; // Optional CSS for styling

export default function ProductList() {
  const [products, setProducts] = useState([]);

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

  return (
    <div className={styles.productContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.product}>
          <img src={product.image_url} alt={product.title} className={styles.productImage} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
