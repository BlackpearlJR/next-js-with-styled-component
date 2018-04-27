import {
  ADD_USER,
  EDIT_USER,
  DELETE_USER
} from '../types';

const INITIAL_STATE = {
  users: {}
};

export const addUser = data => ({
  type: ADD_USER,
  data
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...INITIAL_STATE,
        users: action.data,
      };
    case EDIT_USER:
      return {
        ...INITIAL_STATE,
        users: action.data,
      };
    case DELETE_USER:
      return {
        ...INITIAL_STATE,
        users: action.data,
      };
    default:
      return state;
  }
};