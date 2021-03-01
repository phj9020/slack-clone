import React from 'react';
import styled from "styled-components";
import { Button } from '@material-ui/core';
import { provider, authService } from 'fbase';

const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display:grid;
    place-items: center;
`

const LoginInnerContainer = styled.div`
    padding: 100px;
    background-color: white;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit: contain;
        height: 60px;
        margin-bottom: 40px;
    }
    
    > h1 {
        margin-bottom: 20px;
    }
    > p {
        margin-bottom: 40px;
    }

    > .MuiButtonBase-root{
        text-transform: inherit;
        background-color: var(--slack-color);
        color: white;
        padding: 10px 20px;
        font-weight: 700;
        :hover {
            background-color: #e01e5a;
        }
    }
`

function Login() {
    const signIn = async(e) => {
        e.preventDefault();
        // sign in with popup 
        try {
            await authService.signInWithPopup(provider)
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://assets.brandfolder.com/pl546j-7le8zk-838dm2/v/2925184/view@2x.png?v=1611683582" alt="" />
                <h1>Sign in to the HJP Fam</h1>
                <p>hjp.slack.com</p>
                <Button onClick={signIn}>Sign in With Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;
