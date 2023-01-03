import React from 'react';
import { useSelector } from 'react-redux';

  function Modal({ isOpen, onClose }) {
    const photoDetail = useSelector((state) => state.photoDetail);

    return (
      <div>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <span onClick={onClose} className="close-button" style={{cursor: 'pointer'}}>
                &times;
              </span>
              <div>
                {photoDetail.urls && <div>
                    <div>Description : {photoDetail.alt_description}</div>
                    <div>Downloaded : {photoDetail.downloads} times</div>
                    <div>Location : {photoDetail.location.country} times</div>
                    <img src={photoDetail.urls.small} alt={photoDetail.alt_description} />
                </div>}
              </div>
            </div>
          </div>
        )}
      </div>
    );
    
  }
export default Modal;
