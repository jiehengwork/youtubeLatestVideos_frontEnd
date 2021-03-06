import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // font awesome
import { faBars } from '@fortawesome/free-solid-svg-icons' // font awesome
import { StyleAside, StyleA, StyleLabel, LogoStyleDiv, StyleSwitchInput } from "./style"; // css
import SearchBlock from "./searchBlock/SearchBlock";
import ChannelList from "./channelList/ChannelList";

const SideBar = () => {

  return(
    <>
      <StyleLabel htmlFor="sideBar-switch" fixedSwitch><FontAwesomeIcon icon={faBars}/></StyleLabel>
      <StyleSwitchInput type='checkbox' id="sideBar-switch"></StyleSwitchInput>
      <StyleAside className="sideBar" id="sideBar">
        <LogoStyleDiv>
          <StyleLabel htmlFor="sideBar-switch"><FontAwesomeIcon icon={faBars}/></StyleLabel>
          <StyleA href="/#"><span>Search</span></StyleA>
        </LogoStyleDiv>
        <SearchBlock/>
        <ChannelList/>
      </StyleAside>
    </>
  )
};

export default SideBar;