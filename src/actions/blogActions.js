import fetch from 'isomorphic-fetch';
import * as actionTypes from '../actionTypes/blogActionTypes';

const blogAPI = 'http://589775f16b972d12000fa9b2.mockapi.io/api/v1/blog';

class BlogActions{
    fetchBlogItems(){
        return dispatch => {
            return fetch(blogAPI)
                .then(res => {
                    if(res.status == 200){
                        return res.json();
                    }
                })
                .then(posts => dispatch(this.fetchBlogItemsSuccess(posts)))
        }
    }
    fetchBlogItemsSuccess({ posts }){
        return {
            type: actionTypes.BLOG_ITEMS_FETCH_SUCCESS,
            posts: posts
        }
    }
    fetchBlogItem(postId){
        return dispatch => {
            return fetch(`${blogAPI}/${postId}`)
                .then(res => {
                    if(res.status == 200){
                        return res.json();
                    }
                })
                .then(post => dispatch(this.fetchBlogItemSuccess(post)))
        }
    }
    fetchBlogItemSuccess(post){
        return {
            type: actionTypes.BLOG_ITEM_FETCH_SUCCESS,
            post
        }
    }
    toogleMarkBlogItem(postId){
        return {
            type: actionTypes.BLOG_ITEM_TOOGLE_MARK,
            postId
        }
    }
}
const blogActions = new BlogActions();
export default blogActions;
