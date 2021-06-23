import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage
} from "../appState/actions";
import { selectUser } from '../user/selectors'

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

export const postReviewForCafe = (cafeId, review, rating, image)=> async(dispatch, getState)=> {
  const {id, token } = selectUser(getState())
  dispatch(appLoading());
  try {

  }catch(e) {
    console.log(e.message)
  }
}