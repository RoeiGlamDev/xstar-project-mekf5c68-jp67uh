import React from 'react';
import './layout.css'; // Import your custom styles

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="logo">FashionTV Cosmetics</h1>
        <nav className="navbar">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main className="main-content">{children}</main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} FashionTV Cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;