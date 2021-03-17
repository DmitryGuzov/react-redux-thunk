import {
  REQUEST_USERS,
  RECEIVE_USERS
} from '../actions/requestUsersAction';

const initialState = {
  isLoading: false,
  users: []
};

export const usersReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        isLoading: true
      };
    case RECEIVE_USERS:
      return {
        isLoading: false,
        users: action.payload
      };
    default:
      return state;
  }
};
