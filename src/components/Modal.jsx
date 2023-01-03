import React from 'react';

  function Modal({ photoDetail, isOpen, onClose }) {
    console.log('photoDetail', photoDetail)
    return (
      <div>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <span onClick={onClose} className="close-button" style={{cursor: 'pointer'}}>
                &times;
              </span>
              <div>
                  <img src={photoDetail.urls.small} alt={photoDetail.alt_description} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
    
  }
export default Modal;
