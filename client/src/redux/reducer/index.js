import { combineReducers } from "redux"

import adminLogin from './reducers/Admin/login/Login'
import adminBase from './reducers/Admin/base'
import adminRoute from './reducers/Admin/route'

export default combineReducers({
    adminLogin: adminLogin,
    adminBase: adminBase,
    adminRoute: adminRoute
  
})
