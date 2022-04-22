import { ADDLIST, MINUSLIST } from "../constant";

const defaultList = [];

const searchListReducer = (state = defaultList, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADDLIST:
      return [payload, ...state];
    case MINUSLIST:
      return state.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
};
export default searchListReducer;
