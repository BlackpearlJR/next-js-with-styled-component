import { combineReducers } from "redux";
import user from "./user";
import blog from "./blog";

const appReducer = combineReducers({
  userReducer: user,
  blogReducer: blog,
});

const reducer = (state, action) => {
  return appReducer(state, action);
};

export default reducer;