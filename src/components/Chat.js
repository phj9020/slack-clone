import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {useSelector} from "react-redux";
import {selectRoomId} from "features/appSlice";
import ChatInput from "components/ChatInput";
import {dbService} from "fbase";
import { useDocument, useCollection } from 'react-firebase-hooks/firestore';
import Message from "components/Message";

const ChatContainer = styled.div`
    flex:0.7;
    flex-grow: 1;
    margin-top: 60px;
    overflow-y: scroll;
`

const Header = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`

const HeaderLeft = styled.div`
    display:flex;
    align-items: center;
    
    > h4 {
        display: flex;
        text-transform: lowercase;
    }

    > h4 > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 22px;
    }
`

const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        font-size: 16px;
        margin-right: 5px;
    }
`   

const ChatMessages = styled.div`

`

const ChatBottom = styled.div`
    padding-bottom: 100px;
`


function Chat() {
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(roomId && dbService.collection("rooms").doc(roomId));
    const [roomMessages, loading] = useCollection(roomId && dbService.collection("rooms").doc(roomId).collection("messages").orderBy('timestamp', 'asc'))
    const chatRef = useRef(null);

    console.log(roomDetails?.data().name)
    console.log(roomMessages?.docs.map(item => item.data().message))

    useEffect(()=> {
        chatRef?.current?.scrollIntoView({behavior: "smooth"});
    }, [roomId, loading])

    return (
        <ChatContainer>
            {roomDetails && roomMessages && (
                <>
                <Header>
                    <HeaderLeft>
                        <h4><strong>#{roomDetails?.data().name}</strong><StarOutlineIcon /></h4>
                    </HeaderLeft>
                    <HeaderRight>
                        <p><InfoOutlinedIcon /> Details</p>
                    </HeaderRight>
                </Header>
                <ChatMessages>
                    {/* Fetch message : list out Messages */}
                    {roomMessages && roomMessages.docs.map(doc => {
                        const { message, timestamp, user, userImage} = doc.data();
                        return (
                            <Message key={doc.id} id={doc.id} message={message} timestamp={timestamp} userImage={userImage} user={user}/>
                        ) 
                    })}
                    <ChatBottom ref={chatRef} />
                </ChatMessages>
                <ChatInput chatRef={chatRef} channelId={roomId} channelName={roomDetails?.data().name} />
                </>
            )}
            
        </ChatContainer>
    )
}

export default Chat;
