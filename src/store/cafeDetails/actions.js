import { apiUrl } from "../../config/constants";
import axios from "axios";

import {
  appLoading,
  appDoneLoading,
} from "../appState/actions";
import { selectUser } from '../user/selectors'

export const FETCHREVIEWS_SUCCESS = "FETCHREVIEWS_SUCCESS";
export const POSTREVIEW_SUCCESS = "POSTREVIEW_SUCCESS"


export const fetchReviewsSuccess = (cafe)=> ({
  type: FETCHREVIEWS_SUCCESS,
  payload: cafe
})

export const postReviewSuccess = (userCafe)=> ({
  type: POSTREVIEW_SUCCESS,
  payload: userCafe
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

export const postReviewForCafe = (userId, cafeId, review, rating)=> async(dispatch, getState)=> {
  const { token } = selectUser(getState())
  dispatch(appLoading());
  try {
    const response = await axios.post(`${apiUrl}/cafes/postreview`, {
      userId,
      cafeId,
      review,
      rating
    }, 
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response)
    dispatch(postReviewSuccess(response.data.newUserCafe))
    dispatch(appDoneLoading());
  }catch(e) {
    console.log(e.message)
  }
}

