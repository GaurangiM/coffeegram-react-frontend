import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import cafeList from './cafeList/reducer'
import cafeDetails from './cafeDetails/reducer'

export default combineReducers({
  appState,
  user,
  cafeList,
  cafeDetails
});
