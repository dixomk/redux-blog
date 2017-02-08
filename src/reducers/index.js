import { combineReducers } from 'redux';
import blog from './blogReducer';
import post from './postReducer';

export default combineReducers({
    posts: blog,
    post
});
