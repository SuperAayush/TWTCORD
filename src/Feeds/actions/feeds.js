import * as api from "../api";

export const getFeeds = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFeeds();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createFeeds = (feed) => async (dispatch) => {
  try {
    const { data } = await api.createFeeds(feed);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
