import { apiUrl } from "../../config/constants";
import axios from "axios";
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

export const postReviewForCafe = (cafeId, review, rating, image, history)=> async(dispatch, getState)=> {
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
    history.push("/")
    dispatch(appDoneLoading());
    dispatch(showMessageWithTimeout("success", true, "Hurray ! Thank you for the review."))
  }catch(e) {
    console.log(e.message)
  }
}