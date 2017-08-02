import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducer/index"

import {object,saveItem} from './reducer/initialState'

const middleware = applyMiddleware(promise(), thunk, logger)


const state = localStorage.getItem('reduxState') ? object : object

//saveStateRedux
saveItem(state)

export default createStore(reducer, state, middleware)
