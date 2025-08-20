'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      scale: 1,
      viewFactor: 0.2,
    });

    sr.reveal('.reveal', {
      origin: 'bottom', // Animation origin
      interval: 100, // Delay between animations
    });
  }, []);

  return (
    <div>
      <h1 className="reveal">Welcome to Luxury FashionTV Cosmetics</h1>
      <p className="reveal">Experience elegance and sophistication.</p>
      <div className="reveal">
        <img src="/path/to/image.jpg" alt="Luxury Cosmetics" />
      </div>
    </div>
  );
};

export default ScrollRevealComponent;