import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducer/index"

const middleware = applyMiddleware( thunk, logger)

export default createStore(reducer, middleware)
