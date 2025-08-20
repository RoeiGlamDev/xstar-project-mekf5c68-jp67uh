import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const featuresData = [
  {
    title: 'Luxurious Ingredients',
    description: 'Our cosmetics are made with the finest ingredients to ensure a luxurious experience.',
  },
  {
    title: 'Elegant Packaging',
    description: 'Each product is beautifully packaged, reflecting the high-end nature of our brand.',
  },
  {
    title: 'Cruelty-Free',
    description: 'We are committed to being cruelty-free, ensuring no harm comes to animals in our production process.',
  },
  {
    title: 'Exclusive Collections',
    description: 'Discover our limited edition collections that embody elegance and sophistication.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Features</h2>
      <div className="features-list">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-item">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;