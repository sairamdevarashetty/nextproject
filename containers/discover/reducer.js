import actions from './actions'
import constants from './constants';

const initialState = {
  isUserLoggedIn:false  
}

export const discoverReducer = (state={}, action) => {
  switch(action.type) {
    case (constants.FETCH_DISCOVER_PHOTOS_API_SUCCESS):
      return {
        ...state,
        ...action.payload
      }
      break;
    default:
        return state
  }
}

export default {
  discoverReducer
};

