import {FETCHREVIEWS_SUCCESS} from './actions'

const initialState = {
  images: [],
  userCafes: [],
  address: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHREVIEWS_SUCCESS:
      return {...action.payload};

    default:
      return state;
  }
};