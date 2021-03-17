import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { countReducer } from "./countReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  app: countReducer,
});

export default rootReducer;
