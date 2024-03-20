import React from 'react';
import PropTypes from 'prop-types';
import Styles from './imageGallery.module.css';

const ImageGallery = ({ children }) => {
  return (
    <ul className={Styles.ImageGallery}>
      {children}
    </ul>
  );
}

ImageGallery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImageGallery;
