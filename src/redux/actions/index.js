import { ADDCOUNT, MINUS } from "../constant";

export const addCount = (data) => ({ type: ADDCOUNT, data });
export const minusCount = (data) => ({ type: MINUS, data });

export const asyncAddCount = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addCount(data));
    }, time);
  };
};
