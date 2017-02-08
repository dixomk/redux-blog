import React from 'react';
import { connect } from 'react-redux';
import blogActions from '../../actions/blogActions';
import BlogItem from '../../components/blogItem/blogItem';
import Button from '../../components/button/button';

const BlogList = ({ posts, onMarkClick, params, children }) => {
    const blogListItems = posts.map((post, indx) => {
        const btnProps = {
            id: post.id,
            btnTitle: post.marked ? 'unmark' : 'mark',
            tooltipText: 'Mark/unmark as read',
            onClick: ev => {
                ev.preventDefault();
                const target = ev.target;
                onMarkClick(target.dataset['value']);
            }
        }
        return (
            <BlogItem key={indx} {...post}>
                <Button {...btnProps}/>
            </BlogItem>
        );
    });

    return (
        <section>
            {
                params.id ? children : blogListItems
            }
        </section>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
      onMarkClick: postId => dispatch(blogActions.toogleMarkBlogItem(postId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
