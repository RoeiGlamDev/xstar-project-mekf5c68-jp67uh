import React from 'react';
import './TestimonialsSection.css'; // Importing CSS for styling

const testimonials = [
  {
    name: 'Sophia Loren',
    quote: 'FashionTV cosmetics transformed my beauty routine!',
    image: '/images/testimonial1.jpg',
  },
  {
    name: 'Gigi Hadid',
    quote: 'The elegance and quality are unmatched!',
    image: '/images/testimonial2.jpg',
  },
  {
    name: 'Rihanna',
    quote: 'I feel luxurious every time I use these products.',
    image: '/images/testimonial3.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;