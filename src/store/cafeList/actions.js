import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage
} from "../appState/actions";

export const FETCHDATA_SUCCESS = "FETCHDATA_SUCCESS";

export const fetchDataSuccess = (cafeList)=> ({
  type: FETCHDATA_SUCCESS,
  payload: cafeList
})


export const getCafes = ()=> async(dispatch, getState)=> {
  dispatch(appLoading());
  try {
    
      const response = await axios.get(`${apiUrl}/cafes`)
      console.log(response)
      dispatch(fetchDataSuccess(response.data.allCafes))
      dispatch(appDoneLoading());
    
    
    
  }catch(e) {
    console.log(e.message)
  }
}

export const getCafeReviews = (id)=> async(dispatch, getState)=> {
  try {
    const response = await axios.get(`${apiUrl}/cafes/${id}/reviews`)
    console.log(response)
    //dispatch(fetchReviewsSuccess(response.data.reviews))
  }catch(e) {
    console.log(e.message)
  }
}