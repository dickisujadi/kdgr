export const SEARCH_PHOTOS = 'SEARCH_PHOTOS';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const FETCH_PHOTO_DETAIL = 'FETCH_PHOTO_DETAIL';
export const SET_PHOTO_DETAIL = 'SET_PHOTO_DETAIL';

export const searchPhotos = (query) => ({
    type: SEARCH_PHOTOS,
    payload: query
});

export const fetchPhotos = (query) => ({
    type: FETCH_PHOTOS,
    payload: query
});

export const fetchPhotoDetail = (id) => ({
    type: FETCH_PHOTO_DETAIL,
    payload: id
});

export const setPhotoDetail = (detail) => ({
    type: SET_PHOTO_DETAIL,
    payload: detail
});