import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import * as constants from './constants';

function* fetchDiscoverPhotos(params) {
  console.log("running saga")
try{
    const response = yield call(fetch);
    console.log("RES", response);
    if(response) {
      yield put(actions.fetchDiscoverPhotosApiSuccess, response)
    }
 } catch(e) {
    console.log("ERROR", e);
 }

}

export default function* saga() {
    yield takeEvery('FETCH_DISCOVER_PHOTOS_API', fetchDiscoverPhotos)
}



