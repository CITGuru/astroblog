import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// Reducers

import blog from "./blog";

export default history =>
  combineReducers({
    router: connectRouter(history),
    blog: blog
  });
