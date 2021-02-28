import React from 'react';
import styled from "styled-components";
import { Avatar } from '@material-ui/core';

const Container = styled.div`
    width: 100%;
    height: 50px;
`

const HeaderLeft = styled.div`


`

const HeaderAvatar = styled(Avatar)`
    width: 10px;
`

const Header = ()=>{
    return(
        <Container>
            <HeaderLeft>
                <HeaderAvatar 
                    // Todo: onClick
                />
            </HeaderLeft>
        </Container>
    )
}

export default Header;


