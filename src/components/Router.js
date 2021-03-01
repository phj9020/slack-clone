import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Chat from "components/Chat";
import styled from "styled-components";
import Login from "components/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { authService } from "fbase";

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const MainRouter = () => {
  const [user, loading] = useAuthState(authService);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header user={user} />
          <AppBody>
            <Sidebar user={user} />
            <Switch>
              <Route path="/" exact>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
      )}
    </Router>
  );
};

export default MainRouter;
