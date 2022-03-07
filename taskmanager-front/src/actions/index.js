import * as api from "../api";
/* export * from "./authentication"; */

export const fetchMenu = () => {
  return (dispatch) => {
    api
      .getMenu()
      .then((resp) => {
        dispatch(fetchMenuSucceeded(resp.data));
      })
      .catch((e) => {
        dispatch(fetchError(e));
      });
  };
};

const fetchMenuSucceeded = (data) => {
  return {
    type: "FETCH_MENU",
    payload: { menubar: data }
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
