import React from 'react';
import './StatsSection.css'; // Assuming a CSS file for styling

const StatsSection: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="stat-item">
                <h2 className="stat-number">100+</h2>
                <p className="stat-description">Luxury Products</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">500k+</h2>
                <p className="stat-description">Happy Customers</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">10+</h2>
                <p className="stat-description">Years in Business</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">20+</h2>
                <p className="stat-description">Awards Won</p>
            </div>
        </section>
    );
};

export default StatsSection;