import {
  ADD_COMMENT,
} from '../types';

const INITIAL_STATE = {
  comments: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...INITIAL_STATE,
        comments: action.data,
      };
    default:
      return state;
  }
};