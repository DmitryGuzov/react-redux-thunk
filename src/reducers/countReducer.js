
import { INCREMENT_COUNT, ASYNC_ACTION } from "../actions/incrementCountAction";

const initialState = {
  count: 1,
  data: {},
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
    case ASYNC_ACTION:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

// const setData = (state, action) => {
//   return { ...state, data: action.payload };
// };

// const setCount = (state) => {
//   return { ...state, count: state.count + 1 };
// };

// export default handleActions(
//   {
//     decrement: setData,
//     incrementCountAction: setCount,
//   },
//   initialState
// );
