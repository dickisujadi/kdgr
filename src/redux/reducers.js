import { SEARCH_PHOTOS, FETCH_PHOTOS, FETCH_PHOTO_DETAIL } from "./actions";

const initialState = {
    searchQuery: '',
    photos: [],
    totalPages: 5,
    currentPage: 1,
    photoDetail: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PHOTOS:
            return {
                ...state,
                searchQuery: action.payload,
                currentPage: 1,
            }

        case FETCH_PHOTOS:
            return {
                ...state,
                photos: action.payload,
                totalPages: action.payload,
            }

        case FETCH_PHOTO_DETAIL:
            return {
                ...state,
                photoDetail: action.payload,
            }
    
        default:
            return state;
    }
}

export default reducer;