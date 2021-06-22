import {FETCHDATA_SUCCESS} from './actions'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHDATA_SUCCESS:
      return [...action.payload ];

    default:
      return state;
  }
};