import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
} from "../appState/actions";

export const GETUSERS_SUCCESS = "GETUSERS_SUCCESS"

export const getUsersSuccess = (users)=> ({
  type: GETUSERS_SUCCESS,
  payload: users
})

export const getUsers = ()=> async(dispatch, getState)=> {
  dispatch(appLoading());
  try {
    
      const response = await axios.get(`${apiUrl}/users`)
      console.log(response)
      dispatch(getUsersSuccess(response.data.allUsers))
      dispatch(appDoneLoading());
    }catch(e) {
    console.log(e.message)
  }
}