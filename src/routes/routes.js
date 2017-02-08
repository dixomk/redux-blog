import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/app/app';
import Home from '../components/home/home';
import Post from '../containers/post/post';
import BlogList from '../containers/blogList/blogList';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/blog' component={BlogList}>
        <Route path='post/:id' component={Post}/>
    </Route>
  </Route>
);
