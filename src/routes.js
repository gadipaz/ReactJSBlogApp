/**
 * Created by GadiPaz on 28/12/2016.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
    </Route>
);
