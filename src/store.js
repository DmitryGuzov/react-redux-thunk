import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { send } from "./helpers/requests";

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(send), thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
