import React from 'react';
import PropTypes from 'prop-types';
import Styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li className={Styles.ImageGalleryItem} onClick={onClick}>
      <img src={src} alt={alt} className={Styles.ImageGalleryItem_image} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
