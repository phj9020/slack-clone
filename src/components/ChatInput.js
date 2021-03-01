import React, {useState} from 'react';
import styled from "styled-components";
import {dbService} from "fbase";
import firebase from "firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import {authService} from 'fbase';


const ChatInputContainer = styled.div`
    > form {
        position: relative;
        display:flex;
        justify-content:center;
    }

    > form > input[type="text"] {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > input[type="submit"] {
        display: none;
    }

`

function ChatInput({channelId, channelName, chatRef}) {
    const [input, setInput] = useState("");
    const [user] = useAuthState(authService);

    const onChange = (e) => {
        const { target : { value }} = e; 
        setInput(value);
    }

    const sendMessage = async(e) => {
        e.preventDefault();

        if(channelId === null) {
            return false;
        }

        await dbService.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        });

        chatRef.current.scrollIntoView({behavior:"smooth"});

        setInput("");
    }

    return (
        <ChatInputContainer>
            <form onSubmit={sendMessage}>
                <input value={input} type="text" placeholder={`Message to #${channelName}`} onChange={onChange} />
                <input type="submit" value="Send" /> 
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput;
