import { call, put, takeLatest } from "redux-saga/effects";
import { SEARCH_PHOTOS, FETCH_PHOTOS, FETCH_PHOTO_DETAIL, SET_PHOTO_DETAIL } from "../redux/actions";
import { searchPhotos, fetchPhotos, fetchPhotoDetail } from "../sagas/api";

function* searchPhotosSaga(action) {
    try {
        const response = yield call(searchPhotos, action.payload, 1, 5);
        yield put({type: FETCH_PHOTOS, payload: response.data});
    } catch (error) {
        console.log(error);
    }
}

function* fetchPhotosSaga(action) {
    try {
        const response = yield call(fetchPhotos, action.payload);
        yield put({ type: FETCH_PHOTOS, payload: response.data });
    } catch (error) {
        console.log(error);
    }
}

function* fetchPhotoDetailSaga(action) {
    try {
      const response = yield call(fetchPhotoDetail, action.payload);
      yield put({ type: FETCH_PHOTO_DETAIL, payload: response.data });
    } catch (error) {
      console.log(error);
    }
}

function* setPhotoDetailSaga(action) {
    try {
        console.log('setPhotoDetail', action);
    } catch (error) {
      console.log(error);
    }
}
  
export default function* rootSaga() {
    yield takeLatest(SEARCH_PHOTOS, searchPhotosSaga);
    yield takeLatest(FETCH_PHOTOS, fetchPhotosSaga);
    yield takeLatest(FETCH_PHOTO_DETAIL, fetchPhotoDetailSaga);
    yield takeLatest(SET_PHOTO_DETAIL, setPhotoDetailSaga);
}