import { combineReducers } from "redux"

import adminLogin from './reducers/Admin/login/Login'
import adminBase from './reducers/Admin/base'
import adminLenguage from './reducers/Admin/lenguages'
import device from './reducers/InitialState/device'
import personLenguage from './reducers/InitialState/lenguages'

export default combineReducers({
    adminLogin: adminLogin,
    adminBase: adminBase,
    adminLenguage: adminLenguage,
    device: device,
    personLenguage:personLenguage
})
