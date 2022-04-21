// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import * as reducers from "./reducers";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: { ...reducers },
});
