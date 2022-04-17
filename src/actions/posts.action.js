import { AXIOS_INSTANCE } from "../api/api";
import { POST_CONST } from "../api/actions.types"; // action type constants
import { getRequest, getResponse, getFailure } from "./index"; // function accept 2 args-> action.type and data

export const getPosts = () => async (dispatch) => {
  dispatch(getRequest(POST_CONST.POSTS_REQUEST, null)); //requesting
  try {
    const response = await AXIOS_INSTANCE.get("/posts");
    if (response) {
      dispatch(
        getResponse(POST_CONST.POSTS_RESPONSE, {
          //getting response
          response: {
            status: 200,
            data: response.data,
          },
        })
      );
    } else {
      dispatch(
        getFailure(POST_CONST.POSTS_ERROR, {
          //getting failed
          response: {
            status: 403,
            data: response,
          },
        })
      );
    }
  } catch (error) {
    dispatch(getFailure(POST_CONST.POSTS_ERROR, error)); //getting failed
  }
};
