import { apiUrl } from "../../config/constants";
import axios from "axios";

import {
  appLoading,
  appDoneLoading,
} from "../appState/actions";

export const FETCHREVIEWS_SUCCESS = "FETCHREVIEWS_SUCCESS";


export const fetchReviewsSuccess = (cafe)=> ({
  type: FETCHREVIEWS_SUCCESS,
  payload: cafe
})

export const fetchCafeDetails = (id)=> async(dispatch, getState)=> {
  dispatch(appLoading());
  try {
      const response = await axios.get(`${apiUrl}/cafes/${id}`)
      console.log(response)
      dispatch(fetchReviewsSuccess(response.data.cafe))
      dispatch(appDoneLoading());
    }catch(e) {
    console.log(e.message)
  }
}

