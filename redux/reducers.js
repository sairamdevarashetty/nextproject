import { initApp } from './actions'

const initialState = {
   isUserLoggedIn:false  
}
function todoApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  return state
}

export default {
    todoApp
};

