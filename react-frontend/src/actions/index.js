import * as api from "../api";
/* export * from "./authentication"; */

export const fetchHelloWorld = () => {
  return (dispatch) => {
    api
      .getHelloWorld()
      .then((resp) => {
        dispatch(fetchHelloWorldSucceeded(resp.data));
      })
      .catch((e) => {
        dispatch(fetchError(e));
      });
  };
};

const fetchHelloWorldSucceeded = (data) => {
  return {
    type: "FETCH_HELLO_WORLD",
    payload: { helloWorld: data }
  };
};

const fetchError = (error) => {
  return {
    type: "ERROR",
    payload: {
      status: error.response ? error.response.status : null,
      headers: error.response ? error.response.headers : null,
      data: error.response ? error.response.data : null,
      message: error.message
    }
  };
};
