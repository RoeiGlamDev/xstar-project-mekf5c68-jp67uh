import React from 'react';
import './loading.css'; // Assuming you have a CSS file for styles

const Loading: React.FC = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Loading...</p>
        </div>
    );
};

export default Loading;