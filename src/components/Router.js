import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import Chat from "components/Chat";
import styled from "styled-components";
import Login from "components/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { authService } from "fbase";
import Spinner from "react-spinkit";

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
`

const AppLoadingContent = styled.div`
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    > img {
        object-fit: contain;
        height: 60px;
        padding: 40px;
        margin-bottom: 40px;
    }

`

const MainRouter = () => {
  const [user, loading] = useAuthState(authService);

  if(loading) {
      return(
          <AppLoading>
              <AppLoadingContent>
                <img src="https://assets.brandfolder.com/pl546j-7le8zk-838dm2/v/2925184/view@2x.png?v=1611683582" alt="" />
                <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
              </AppLoadingContent>
          </AppLoading>
      )
  }

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
