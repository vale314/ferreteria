import { combineReducers } from "redux"

import adminLogin from './reducers/Admin/login/Login'
import homeHome from './reducers/Admin/base'
import adminRoute from './reducers/Admin/route'

export default combineReducers({
  adminLogin,
  homeHome,
  adminRoute
})
