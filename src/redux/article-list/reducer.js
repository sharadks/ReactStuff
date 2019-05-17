import { actionTypes } from './actions';

const defaultState = {
  articlesList: [{
    id: 1,
    name: 'test article'
  },
  {
    id: 2,
    name: 'test article'
  }]
}
export default function (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES_SUCCESS:
      return { ...state, articlesList: [...action.payload] }
    default:
      return state;
  }
}