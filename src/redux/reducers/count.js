import { ADDCOUNT, MINUS } from "../constant";
const defaultState = 0;
const count = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADDCOUNT:
      return state + payload;
    case MINUS:
      return state - payload;
    default:
      return state;
  }
};
export default count;
