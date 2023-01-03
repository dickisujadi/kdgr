import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPhotos } from '../redux/actions';
import Modal from './Modal';

const PhotosPage = () => {
  const [page, setPage] = useState(1);
  const photos = useSelector((state) => state.photos);
  const totalPages = useSelector((state) => state.totalPages);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [photoDetail, setPhotoDetail] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchPhotos(page));
  }, [page]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    console.log('photoDetail', photoDetail);
  }, [photoDetail]);

  const handlePictureClick = (photo) => {
    setPhotoDetail(photo);
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setPhotoDetail({});
    setIsModalOpen(false);
  }

  return (
    <div>
      <Modal isOpen={isModalOpen} photoDetail={photoDetail} onClose={handleCloseModal}/>
      {photos.results && photos.results.length ? photos.results.map((photo) => {
          return <div key={photo.id} onClick={() => {handlePictureClick(photo)}}>
              <img src={photo.urls.small} alt={photo.alt_description} />
          </div>
      }) : ''}

      {loading && 'Loading ...'}
      {page < totalPages && <button onClick={handleLoadMore}>Load more</button>}
    </div>
  );
};

export default PhotosPage;
