import * as actionTypes from '../actionTypes/blogActionTypes';

export default (state = [], action) => {
  switch (action.type){
    case actionTypes.BLOG_ITEMS_FETCH_SUCCESS:
        return action.posts;
    case actionTypes.BLOG_ITEM_TOOGLE_MARK:{
        const posts = state.slice();
        posts.forEach(post => {
            if(action.postId == post.id){
                post.marked = !post.marked;
            }
        });
        return posts;
    }
    default:
        return state;
  }
};
