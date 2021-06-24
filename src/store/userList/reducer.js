import {GETUSERS_SUCCESS} from './actions'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case GETUSERS_SUCCESS:
      return [...action.payload ];

    default:
      return state;
  }
};