import { ADDCOUNT, MINUS } from "../constant";
const defaultState = 0;
export const addCount = (state = defaultState, action) => {
  switch (action.type) {
    case ADDCOUNT:
      return state + action.data;
    default:
      return state;
  }
};
export const minusCount = (state = defaultState, action) => {
  switch (action.type) {
    case MINUS:
      return state - action.data;
    default:
      return state;
  }
};
