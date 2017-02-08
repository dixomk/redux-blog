import * as actionTypes from '../actionTypes/blogActionType';

export default (state = '', action) => {
  switch (action.type){
    case actionTypes.BLOG_ITEMS_FETCH_FAILED:
        return action.errText;
        break;
    default:
        return state;
  }
};
