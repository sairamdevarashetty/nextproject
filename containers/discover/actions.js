import actions from './constants';

export function fetchDiscoverPhotosApi () {
    return {
        type : actions.FETCH_DISCOVER_PHOTOS_API,
    }
} 

export function fetchDiscoverPhotosApiSuccess (payload) {
    return {
        type : actions.FETCH_DISCOVER_PHOTOS_API_SUCCESS,
        payload
    }
}

export function fetchDiscoverPhotosApiFailure (payload) {
    return {
        type : actions.FETCH_DISCOVER_PHOTOS_API_FAILURE,
        payload
    }
}


export default {
    fetchDiscoverPhotosApi,
    fetchDiscoverPhotosApiSuccess,
    fetchDiscoverPhotosApiFailure
}
