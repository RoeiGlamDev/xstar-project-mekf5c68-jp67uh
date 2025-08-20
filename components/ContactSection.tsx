import React from 'react';
import './ContactSection.css'; // Importing CSS for styling

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-description">
                    We would love to hear from you! Please fill out the form below to reach us.
                </p>
                <form className="contact-form">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" className="form-input" required />

                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-input" required />

                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" className="form-textarea" required></textarea>

                    <button type="submit" className="form-button">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;