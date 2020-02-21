import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import * as constants from './constants';

function fetchData(param) {
  return fetch({
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache'
  })
}

export function* fetchDiscoverPhotos() {
  try {
      const response = yield call(
        fetchData,
        "https://cytapi.telemaco.online/api/Destinazioni?token=7AB561B0-3CE6-4719-9450-C36CC91161CA&evidenza=1&fbclid=IwAR1HeI0TzW7MAJBaCATM19nRQWdMJaSljn10u-aZHieUCYKDnM48QuzCGbY", 
      );

      if(response) {
        yield put(actions.fetchDiscoverPhotosApiSuccess, response)
      }
  } catch(e) {
      console.log("ERROR", e);
  }
}

export default function* saga() {
  console.log("running saga")
  yield takeEvery('FETCH_DISCOVER_PHOTOS_API', fetchDiscoverPhotos)
}



