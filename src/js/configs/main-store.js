import {createStore} from 'redux';

const defaultState = {
  article: {}
};

export default createStore((state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_ARTICLE':
      const newArticle = {};
      newArticle[action.key] = action.data;
      const obj = Object.assign({}, state, {
        article: {
          ...state.article,
          ...newArticle
        }
      });
      console.log(obj)
      return obj;
    default:
      return state;
  }
});
