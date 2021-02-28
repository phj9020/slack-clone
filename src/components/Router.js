import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from 'components/Header';

const MainRouter = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact ><Header /></Route>
            </Switch>
        </Router>
    )
}

export default MainRouter;