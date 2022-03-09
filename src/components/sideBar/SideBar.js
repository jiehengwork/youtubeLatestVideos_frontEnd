import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import SearchBlock from "./SearchBlock";

const SideBar = () => {

  return(
    <aside className="sideBar">
      <div>
        <FontAwesomeIcon icon={faBars}/>
        <a><apan>Latest Videos</apan></a>
      </div>
      <SearchBlock/>

    </aside>
  )
};

export default SideBar;