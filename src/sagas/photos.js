import { call, put, takeLatest } from "redux-saga/effects";
import { SEARCH_PHOTOS, FETCH_PHOTOS, FETCH_PHOTO_DETAIL } from "../redux/actions";
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
        const response = yield call(searchPhotos, action.payload, 1, action.payload);
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
  
export default function* rootSaga() {
    yield takeLatest(SEARCH_PHOTOS, searchPhotosSaga);
    yield takeLatest(FETCH_PHOTOS, fetchPhotosSaga);
    yield takeLatest(FETCH_PHOTO_DETAIL, fetchPhotoDetailSaga);
}