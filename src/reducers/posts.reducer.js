import { POST_CONST } from "../api/actions.types";

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_CONST.POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        postData: [],
        postError: false,
        postNetworkError: false,
      };
    case POST_CONST.POSTS_RESPONSE:
      return {
        ...state,
        isLoading: false,
        postData: action.payload.response,
        postError: false,
        postNetworkError: false,
      };
    case POST_CONST.POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        postData: [],
        postError: action.payload.error ? false : action.payload.response,
        postNetworkError: action.payload.error ? action.payload.error : false,
      };
    default:
      return {
        ...state,
      };
  }
};
export default postReducer;