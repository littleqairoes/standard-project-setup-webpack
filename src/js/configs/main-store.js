import {createStore} from 'redux';

const defaultState = {};

export default createStore((state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
});
