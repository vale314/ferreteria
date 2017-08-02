import { combineReducers } from "redux"

import adminLogin from './reducers/Admin/login/Login'
import adminBase from './reducers/Admin/base'
import device from './reducers/InitialState/device'
import lenguage from './reducers/InitialState/lenguages'

export default combineReducers({
    adminLogin: adminLogin,
    adminBase: adminBase,
    device: device,
    lenguage:lenguage
})
