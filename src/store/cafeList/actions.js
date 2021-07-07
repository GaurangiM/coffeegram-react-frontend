import { apiUrl } from "../../config/constants";
import axios from "axios";

import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
} from "../appState/actions";
import { selectUser } from '../user/selectors'

export const FETCHDATA_SUCCESS = "FETCHDATA_SUCCESS";
export const POSTDATA_SUCCESS = "POSTDATA_SUCCESS";

export const fetchDataSuccess = (cafeList)=> ({
  type: FETCHDATA_SUCCESS,
  payload: cafeList
})

export const postDataSuccess = (cafe)=> ({
  type: POSTDATA_SUCCESS,
  payload: cafe
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
  }catch(e) {
    console.log(e.message)
  }
}

export const postNewCafe = (cafeName, description, postCode, street, houseNumber, city, image, history)=> 
      async(dispatch, getState)=> 
{
  console.log(cafeName)
  const { token } = selectUser(getState())
  const query = encodeURI(`${street} ${houseNumber} ${postCode} ${city}`)
  const geoData = await axios.get(`http://api.positionstack.com/v1/forward?access_key=13a366ecdb5f1db8a5484e2a6ac61aec&query=${query}`)
  let latitude = geoData.data.data[0].latitude
  let longitude = geoData.data.data[0].longitude
  console.log(latitude, longitude, cafeName)
  dispatch(appLoading());
  
  try {
    const response = await axios.post(`${apiUrl}/cafes/postnewcafe`,{
      name: cafeName, 
      description, 
      image, 
      postCode, 
      houseNumber, 
      street, 
      city, 
      latitude,
      longitude
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response)
    history.push("/")
    dispatch(appDoneLoading());
    
    //dispatch(setMessage("Redirect"))
    dispatch(showMessageWithTimeout("success", true, "Hurray ! One more cafe to our list"))
  }catch(e) {
    console.log(e.message)
  }
}