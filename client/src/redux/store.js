import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducer/index"

const middleware = applyMiddleware(promise(), thunk, logger)

const state = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

export default createStore(reducer, state, middleware)
