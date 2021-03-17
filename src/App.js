import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import { requestUsersAction } from "./actions/requestUsersAction";
import {
  incrementCountAction,
  decrementAsyncCountAction,
  SomeNewAction,
} from "./actions/incrementCountAction";

const App = ({
  count,
  users,
  isLoading,
  incrementCountAction,
  requestUsersAction,
  decrementAsyncCountAction,
  SomeNewAction,
}) => {
  useEffect(() => {
    requestUsersAction();
  }, [requestUsersAction]);

  return (
    <div className="App">
      <button onClick={() => incrementCountAction()}>{count}</button>
      <button onClick={() => decrementAsyncCountAction()}>
        click to fetch
      </button>
      <button onClick={() => SomeNewAction(count)}>click to fetch2</button>
      <br />
      {isLoading && "loading..."}
      {!isLoading &&
        users.map((vote, idx) => (
          <div key={idx}>
            ({idx + 1}) Username: {vote.user}
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.users.isLoading,
  users: state.users.users,
  count: state.app.count,
  data: state.app.data,
});

const mapDispatchToProps = {
  incrementCountAction,
  requestUsersAction,
  decrementAsyncCountAction,
  SomeNewAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
