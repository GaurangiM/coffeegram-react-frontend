import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import cafeList from './cafeList/reducer'
import cafeDetails from './cafeDetails/reducer'
import userCafes from './user_cafes/reducer'
import userList from './userList/reducer'

export default combineReducers({
  appState,
  user,
  cafeList,
  cafeDetails,
  userCafes,
  userList
});
