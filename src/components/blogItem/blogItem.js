import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Button from '../button/button';
import styles from './blogItem.css';

const BlogItem = ({ id, title, desc, marked, children }) => {
    const styleClass = marked ? styles.marked : styles.unmarked;

    return (
        <article className={styles.blogListItem}>
            <h3 className={styleClass}><Link to={`/blog/post/${id}`}>{title}</Link></h3>
            {children}
            <p>{desc}</p>
        </article>
    );
}

BlogItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    marked: PropTypes.bool
};
export default BlogItem;
