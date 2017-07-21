import { combineReducers } from "redux"

import adminLogin from './reducers/Admin/Login/Login'
import homeHome from './reducers/Admin/Home/home'
export default combineReducers({
  adminLogin,
  homeHome
})
