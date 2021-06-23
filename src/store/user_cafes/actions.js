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

export const POSTREVIEW_SUCCESS = "POSTREVIEW_SUCCESS"

export const postReviewSuccess = (userReview)=> ({
  type: POSTREVIEW_SUCCESS,
  payload: userReview
})

export const postReviewForCafe = (cafeId, review, rating, image)=> async(dispatch, getState)=> {
  const {id, token } = selectUser(getState())
  dispatch(appLoading());
  try {
    const userReview = await axios.post(`${apiUrl}/cafes/postreview`, {
      cafeId,
      review,
      rating,
      image,
      userId: id
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    dispatch(postReviewSuccess(userReview.data.userCafe))
    dispatch(appDoneLoading());

  }catch(e) {
    console.log(e.message)
  }
}