import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
// css
import { SideBarStyle } from "./style";
// component
import SearchBlock from "./searchBlock/SearchBlock";
import ChannelList from "./channelList/ChannelList";

const SideBar = () => {

  return(
    <SideBarStyle className="sideBar">
      <div>
        <FontAwesomeIcon icon={faBars}/>
        <a><span>Latest Videos</span></a>
      </div>
      <SearchBlock/>
      <ChannelList/>
    </SideBarStyle>
  )
};

export default SideBar;