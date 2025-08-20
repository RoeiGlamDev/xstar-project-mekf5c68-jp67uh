import React from 'react';
import './PricingSection.css'; // Assuming you have a CSS file for styles

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="section-title">Luxury Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Basic Package</h3>
                        <p className="card-price">$49</p>
                        <ul className="card-features">
                            <li>High-quality cosmetics</li>
                            <li>Free shipping on orders over $100</li>
                            <li>Exclusive member discounts</li>
                        </ul>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Premium Package</h3>
                        <p className="card-price">$99</p>
                        <ul className="card-features">
                            <li>All Basic features</li>
                            <li>Personalized beauty consultation</li>
                            <li>Access to exclusive products</li>
                        </ul>
                        <button className="card-button">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Luxury Package</h3>
                        <p className="card-price">$199</p>
                        <ul className="card-features">
                            <li>All Premium features</li>
                            <li>VIP access to events</li>
                            <li>Custom beauty box delivery</li>
                        </ul>
                        <button className="card-button">Choose Plan</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;