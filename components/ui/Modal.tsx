import React from 'react';
import './Modal.css'; // Assuming you have a CSS file for styling

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Do not render if not open

  return (
    <div className="modal-overlay"> {/* Overlay for the modal */}
      <div className="modal-content"> {/* Modal content container */}
        <div className="modal-header"> {/* Header for title */}
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>×</button> {/* Close button */}
        </div>
        <div className="modal-body"> {/* Body for content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;