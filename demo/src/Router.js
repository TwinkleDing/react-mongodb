import React from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import User from './Page/user';
import Index from './Page/index'

const Routerss =<Router>
    <Route exact path="/" component={User} />
    <Route exact path="/login" component={User} />
    <Route exact path="/index" component={Index} />
</Router>

export default Routerss;