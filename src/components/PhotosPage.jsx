import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotoDetail, fetchPhotos } from '../redux/actions';
import Modal from './Modal';

const PhotosPage = () => {
  const photos = useSelector((state) => state.photos);
  const totalPages = useSelector((state) => state.totalPages);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePictureClick = (photo) => {
    dispatch(fetchPhotoDetail(photo.id));
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    dispatch(fetchPhotos(totalPages+5));
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
      {photos.results && photos.results.length ? photos.results.map((photo) => {
          return <div key={photo.id} onClick={() => {handlePictureClick(photo)}}>
              <img src={photo.urls.small} alt={photo.alt_description} />
          </div>
      }) : ''}

      {loading && 'Loading ...'}
    </div>
  );
};

export default PhotosPage;
