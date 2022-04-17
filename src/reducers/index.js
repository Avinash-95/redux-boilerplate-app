import { combineReducers } from "redux";
import postReducer from "./posts.reducer";

export default combineReducers({
  // all the reducer will be placed here.
  posts: postReducer,
});
