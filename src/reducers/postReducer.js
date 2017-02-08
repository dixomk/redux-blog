import * as actionTypes from '../actionTypes/blogActionTypes';

export default (state = {}, action) => {
    switch (action.type){
        case actionTypes.BLOG_ITEM_FETCH_SUCCESS:
            return action.post;
        default:
            return state;
    }
}
