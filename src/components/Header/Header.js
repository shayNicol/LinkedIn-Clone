import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Option from "../Header/Option";


function Header () {
    return (
        <div className="Header">
            <h1>Header</h1>
            <div className="left-header">
            
            {/* <img src={Linkedinlogo} alt="" /> */}

                <div className="search-bar">
                    <SearchIcon/>
                    <input type= 'text'/>

                </div>

            </div>
            <div className="right-header">
            <Option Icon={HomeIcon} title="Home" />
        <Option Icon={SupervisorAccountIcon} title="My Network" />
        <Option Icon={BusinessCenterIcon} title="Jobs" />
        <Option Icon={ChatIcon} title="Messaging" />
        <Option Icon={NotificationsActiveIcon} title="Notifications" />
        <Option avatar={true} title="Log Out" />

            </div>
        </div>

    );
};

export default Header;