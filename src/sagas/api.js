import axios from "axios";

const API_KEY = 'ghX9dF3ZzX6RU-GeqPLM21U5sQgVcrR13Rk-OAzq2G4';

const api = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${API_KEY}`
    }
});

export const searchPhotos = (query, page, per_page) => api.get(`/search/photos`, {
    params: {
        query,
        page,
        per_page
    }
});

export const fetchPhotos = (page) => api.get(`/photos`, {
    params: {
        page
    }
});

export const fetchPhotoDetail = (id) => api.get(`/photos/${id}`);