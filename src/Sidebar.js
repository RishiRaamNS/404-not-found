import { Chat, DonutLarge, MoreVert } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
    return <div className="sidebar">
        <div className="sidebar__header">
            <Avatar src="https://avatars.githubusercontent.com/u/76812006?v=4"/>
            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLarge />
                </IconButton>
                <IconButton>
                    <Chat />
                </IconButton>
                <IconButton>
                    <MoreVert/> 
                </IconButton>
            </div>
        </div>
    </div>
}

export default Sidebar;