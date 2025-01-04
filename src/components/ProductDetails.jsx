import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import styles from './ProductDetails.module.css';
import Navbar from './Navbar.jsx';

export default function ProductDetails() {
  const { id } = useParams(); // Extract product ID from the URL
  const location = useLocation(); // Access the passed state
  const [product, setProduct] = useState(location.state?.product || null);
  const [loading, setLoading] = useState(!product); // If product is not passed, show loading
  const [error, setError] = useState(null); // Error state for better error handling

  useEffect(() => {
    if (!product) {
      // If product data is not passed, fetch it using the ID
      const fetchProduct = async () => {
        try {
          setLoading(true); // Start loading
          const response = await axios.get(`http://localhost:3000/products/${id}`); // Fetch product by ID
          setProduct(response.data);
        } catch (err) {
          setError(err.message || 'Error fetching product details');
        } finally {
          setLoading(false); // End loading
        }
      };
      fetchProduct();
    }
  }, [id, product]);

  // Show a loading spinner or message while data is being fetched
  if (loading) {
    return <p>Loading product details...</p>;
  }

  // Show an error message if the fetch fails
  if (error) {
    return <p>Error: {error}</p>;
  }

  // If product data is successfully fetched or passed, render the product details
  return (
    <>
    <div><Navbar/></div>
    <div className={styles.productDetails}>
      <img src={product.image_url} alt={product.title} className={styles.productImage} />
      <h2>{product.title}</h2>
      <p><strong>Price:</strong> Rs.{product.price}</p>
      <p>{product.description || 'No description available.'}</p>
      <button className={styles.addToCartButton}>Add to Cart</button>
    </div>
    </>
  );
}
