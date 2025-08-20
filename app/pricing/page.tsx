import React from 'react';
import './PricingPage.css'; // Importing CSS for styling

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page" style={{ backgroundColor: '#fff', color: '#000' }}>
            <header className="header">
                <h1 style={{ color: '#ff69b4' }}>Luxury FashionTV Cosmetics</h1>
                <p style={{ color: '#ff1493' }}>Elevate your beauty with our exclusive products</p>
            </header>
            <section className="pricing-section">
                <h2 style={{ color: '#ff69b4' }}>Our Pricing Plans</h2>
                <div className="pricing-cards">
                    <div className="card" style={{ border: '1px solid #ff69b4' }}>
                        <h3>Basic Plan</h3>
                        <p>$29/month</p>
                        <p>Access to basic products</p>
                        <button style={{ backgroundColor: '#ff69b4', color: '#fff' }}>Choose Plan</button>
                    </div>
                    <div className="card" style={{ border: '1px solid #ff69b4' }}>
                        <h3>Premium Plan</h3>
                        <p>$49/month</p>
                        <p>Access to premium products</p>
                        <button style={{ backgroundColor: '#ff69b4', color: '#fff' }}>Choose Plan</button>
                    </div>
                    <div className="card" style={{ border: '1px solid #ff69b4' }}>
                        <h3>Luxury Plan</h3>
                        <p>$99/month</p>
                        <p>Exclusive access to all products</p>
                        <button style={{ backgroundColor: '#ff69b4', color: '#fff' }}>Choose Plan</button>
                    </div>
                </div>
            </section>
            <footer className="footer" style={{ backgroundColor: '#ff69b4', color: '#fff' }}>
                <p>&copy; 2023 Luxury FashionTV Cosmetics. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PricingPage;