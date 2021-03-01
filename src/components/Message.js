import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
    display:flex;
    align-items:center;
    padding: 20px;

    > img {
        height: 50px;
        border-radius: 25px;
    }
`

const MessageInfo = styled.div`
    padding-left: 10px;

    > h4 > span {
        color: gray;
        font-weight: 300;
        font-size: 12px;
        margin-left: 4px;
    }
`


function Message({id, message, timestamp, userImage, user}) {
    return (
        <MessageContainer key={id}>
            <img src={userImage} alt={user}/>
            <MessageInfo>
                <h4>{user}{' '} <span>{new Date(timestamp && timestamp.toDate()).toLocaleString()}</span></h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message;
