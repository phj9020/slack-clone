import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Chat from 'components/Chat';
import styled from 'styled-components';

const AppBody = styled.div`
    display: flex;
    height: 100vh;
 
`

const MainRouter = () => {
    return(
        <Router>
            <>
                <Header />
                <AppBody>
                    <Sidebar />
                    <Switch>
                        <Route path="/" exact ><Chat /></Route>
                    </Switch>
                </AppBody>
            </>
        </Router>
    )
}

export default MainRouter;