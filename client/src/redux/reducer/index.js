import { combineReducers } from "redux"

import adminLogin from './reducers/Admin/login/Login'
import adminBase from './reducers/Admin/base'
import adminLenguages from './reducers/Admin/lenguages'
import device from './reducers/InitialState/device'
import lenguageUser from './reducers/InitialState/lenguages'

export default combineReducers({
    adminLogin: adminLogin,
    adminBase: adminBase,
    adminLenguages: adminLenguages,
    device: device,
    lenguageUser:lenguageUser
})
