import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes/routes';
import configureStore from './store/configureStore';
import blogActions from './actions/blogActions';

const store = configureStore();
store.dispatch(blogActions.fetchBlogItems());

render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('root')
);
