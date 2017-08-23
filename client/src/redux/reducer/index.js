import { combineReducers } from "redux"

import adminLogin from './reducers/Admin/login/Login'
import adminBase from './reducers/Admin/base'
import adminSettings from './reducers/Admin/lenguages'
import adminHeader from './reducers/Admin/headers'
import device from './reducers/InitialState/device'
import personLenguage from './reducers/InitialState/lenguages'


export default combineReducers({
    adminLogin: adminLogin,
    adminBase: adminBase,
    adminSettings: adminSettings,
    adminHeader:adminHeader,
    device: device,
    personLenguage:personLenguage,

})
