import React, { Component } from 'react';
import { connect } from 'react-redux';
import blogActions from '../../actions/blogActions';
import styles from './post.css';

class Post extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPostById(this.props.params.id);
    }

    render(){
        const { title, desc } = this.props.post;
        return (<section>
                <div className={styles.postContainer}>
                    <header><h3 className={styles.postHeader}>{title}</h3></header>
                    <article>
                        <p className={styles.postContent}>{desc}</p>
                    </article>
                </div>
            </section>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        post: state.post
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostById: postId => dispatch(blogActions.fetchBlogItem(postId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
