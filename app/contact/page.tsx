import React from 'react';
import './ContactPage.css'; // Importing CSS for styling

const ContactPage: React.FC = () => {
    return (
        <div className="contact-page">
            <header className="contact-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you!</p>
            </header>
            <form className="contact-form">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit" className="submit-button">Send Message</button>
            </form>
            <footer className="contact-footer">
                <p>Follow us on social media</p>
                <div className="social-icons">
                    {/* Add social media icons here */}
                </div>
            </footer>
        </div>
    );
};

export default ContactPage;