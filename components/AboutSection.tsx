import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">Welcome to FashionTV Cosmetics</h1>
                <p className="about-description">
                    Discover the elegance of luxury cosmetics that enhance your natural beauty. 
                    Our products are crafted with the finest ingredients, ensuring a high-end experience 
                    for every makeup lover.
                </p>
                <p className="about-description">
                    At FashionTV, we believe in empowering individuals through beauty. 
                    Our pink and white aesthetic reflects sophistication and style, 
                    making every product a statement piece in your makeup collection.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;