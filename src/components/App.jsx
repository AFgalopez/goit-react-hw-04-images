import React, { useState } from 'react';
import axios from 'axios';
import Searchbar from './searchbar/Searchbar.jsx';
import ImageGallery from './imageGallery/ImageGallery.jsx';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem.jsx';
import Button from './button/Button.jsx';
import Loader from './loader/Loader.jsx';
import Modal from './modal/Modal.jsx';
import Styles from './app.module.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const handleSubmit = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
    fetchImages();
  };

  const fetchImages = () => {
    const apiKey = '40998850-21238c0a5b68611eff0d55619';
    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    setLoading(true);

    axios
      .get(url)
      .then((response) => {
        setImages((prevImages) => [...prevImages, ...response.data.hits]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((error) => console.error('Error fetching images:', error))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLoadMore = async () => {
    await fetchImages();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handleImageClick = (largeImageURL) => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  return (
    <div className={Styles.App}>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery>
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => handleImageClick(image.largeImageURL)}
          />
        ))}
      </ImageGallery>
      <div className={Styles.Button_container}>
        {loading && <Loader />}
        {images.length > 0 && !loading && <Button onClick={handleLoadMore} />}
        {showModal && <Modal onClose={handleCloseModal} largeImageURL={largeImageURL} />}
      </div>
    </div>
  );
};

export default App;
