import React from 'react';
import { useSelector } from 'react-redux';

const PhotoDetailPage = () => {
  const photoDetail = useSelector((state) => state.photoDetail);

  return (
    <div>
      <img src={photoDetail.urls.regular} alt={photoDetail.alt_description} />
      <p>{photoDetail.description}</p>
    </div>
  );
};

export default PhotoDetailPage;
