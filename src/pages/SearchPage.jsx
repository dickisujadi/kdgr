import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotoDetail, searchPhotos } from "../redux/actions";
import PhotosPage from "../components/PhotosPage";

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchPhotos(query));
    }

    return(
        <>
            <form onSubmit={handleSearch}>
                <input 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder='Input ID'
                />
                <button type="submit" placeholder="input ID">Search</button>
            </form>
            <PhotosPage />
        </>
    )
}

export default SearchPage;