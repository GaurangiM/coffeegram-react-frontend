import {FETCHREVIEWS_SUCCESS, POSTREVIEW_SUCCESS} from './actions'

const initialState = {
  images: [],
  user_caves: [],
  address: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHREVIEWS_SUCCESS:
      return {...action.payload};

    case POSTREVIEW_SUCCESS: 
      return {
        ...state,
        user_caves: [...state.user_caves, action.payload]
      }

    default:
      return state;
  }
};