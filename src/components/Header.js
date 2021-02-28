import React from 'react';
import styled from "styled-components";
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    padding: 10px 0;
    color: white;
    background-color: var(--slack-color)
`

const HeaderLeft = styled.div`
    display: flex;
    flex: 0.3;
    align-items: center;
    margin-left:20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
        cursor: pointer;
        :hover { 
            opacity: 0.8
        }
    }   
`

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover { 
        opacity: 0.8
    }
`



const HeaderSearch = styled.div`
    display: flex;
    flex: 0.4;
    border-radius: 6px;
    justify-content: center;
    background-color: #421f44;
    padding: 0 50px;
    color: gray;
    border: 1px solid gray;

    > input {
        background-color: transparent;
        outline: none;
        border:none;
        text-align: center;
        min-width: 30vw;
        color: white;
    }
`

const HeaderRight = styled.div`
    display:flex;
    flex: 0.3;
    justify-content: flex-end;

    > .MuiSvgIcon-root { 
        cursor: pointer;
        margin-right: 20px;
        :hover{
            opacity: 0.8;
        }
    }
`



const Header = ()=>{
    return(
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar
                    // Todo: onClick
                />
                <AccessTimeIcon />
            </HeaderLeft>
            <HeaderSearch>
                <SearchIcon />
                <input type="text" placeholder="Search HJP FAM" />
            </HeaderSearch>
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;


