import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from "components/SidebarOption";
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import {dbService} from "fbase";
import { useCollection } from 'react-firebase-hooks/firestore';

const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color:white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    > hr {
    border: 1px solid #49274b;
    margin: 10px 0px;
    }
`
const SidebarHeader = styled.div`
    display:flex;
    align-items: center;
    padding: 13px;
    border-bottom: 1px solid #49274b;

    > .MuiSvgIcon-root {
        font-size: 16px;
        padding: 6px;
        border-radius: 50%;
        background-color:white;
        color: #49274b;
        cursor:pointer;
        :hover {
            opacity: 0.8;   
        }
    }
`
const SidebarInfo = styled.div`
    flex:1;
    min-width: 100px;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    
    > h3 {
        display:flex;
        align-items: center;
        font-size: 12px;
        font-weight: 400;

        > .MuiSvgIcon-root{
            margin-top: 1px;
            margin-right: 4px;
            font-size: 12px;
            color: green;
        }
    }
    
`

function Sidebar() {
    const [channels, loading, error] = useCollection(dbService.collection("rooms"));

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>HJP FAM</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Han Jin Park
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>

            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mensions & Reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved Items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File Browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channels" />
            {channels?.docs.map(doc => (
                <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
            ))}
        </SidebarContainer>
    )
}

export default Sidebar;
