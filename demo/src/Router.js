import React from 'react';
import {BrowserRouter as Router , Route, Redirect} from 'react-router-dom';
import store from './store/index'
import Index from './Page/index'
import User from './Page/user';
import Leave from './Page/leave';
let user = store.getState().user
const Routerss =<Router>
    {!user?<Redirect to="/login"/>:''}
    <Route exact path="/" component={User} />
    <Route exact path="/login" component={User} />
    <Route exact path="/index" component={Index} />
    <Route exact path="/leave" component={Leave} />
</Router>

export default Routerss;