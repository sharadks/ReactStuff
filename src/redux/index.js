import { combineReducers } from 'redux'
import articleListReducer from './article-list/reducer';

export default combineReducers({
  articleList: articleListReducer
})
