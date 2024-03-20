import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Styles from './modal.module.css';

const Modal = ({ onClose, largeImageURL }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={Styles.Overlay} onClick={onClose}>
      <div className={Styles.Modal}>
        <img src={largeImageURL} alt="" className={Styles.Modal_img} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
