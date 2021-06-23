import {POSTREVIEW_SUCCESS} from './actions'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTREVIEW_SUCCESS:
      return [...state, action.payload];

    default:
      return state;
  }
};