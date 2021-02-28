import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color:white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
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
        </SidebarContainer>
    )
}

export default Sidebar;
