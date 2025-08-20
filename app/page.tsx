import React from 'react';
import './styles.css'; // Assuming you have a CSS file for styling

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="logo">FashionTV Cosmetics</h1>
      </header>
      <main className="main-content">
        <section className="hero">
          <h2 className="hero-title">Elevate Your Beauty</h2>
          <p className="hero-description">Discover our luxurious range of cosmetics.</p>
          <button className="shop-button">Shop Now</button>
        </section>
        <section className="featured-products">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-grid">
            {/* Map through your products here */}
            <div className="product-card">
              <img src="/path/to/product1.jpg" alt="Product 1" />
              <h3 className="product-name">Product 1</h3>
              <p className="product-price">$49.99</p>
            </div>
            <div className="product-card">
              <img src="/path/to/product2.jpg" alt="Product 2" />
              <h3 className="product-name">Product 2</h3>
              <p className="product-price">$59.99</p>
            </div>
            {/* Add more products as needed */}
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">© 2023 FashionTV Cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;