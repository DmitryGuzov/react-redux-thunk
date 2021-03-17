export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const ASYNC_ACTION = "ASYNC_ACTION";

export const decrement = (data) => ({
  type: ASYNC_ACTION,
  payload: data,
});

export const incrementCountAction = () => ({
  type: INCREMENT_COUNT,
});

export const decrementAsyncCountAction = () => {
  return async (dispatch) => {
    const data = await (
      await fetch("https://jsonplaceholder.typicode.com/todos/1")
    )
      .json()
      .then((json) => {
        return json;
      });
    dispatch(decrement(data));
  };
};
export const SomeNewAction = (number) => {
  return (dispatch, getState, send) => {
    return send({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/todos/${number}`,
    }).then((response) => {
      console.log(response.data);
      dispatch(decrement(response.data));
      return Promise.resolve(response.data);
    });
  };
};
