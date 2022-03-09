import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const SearchBlock = () => {

  const [ channelName, setChannelName ] = useState(undefined);

  const handleSubmit = (e) => {
    console.log(channelName)
    // 阻止 form submit 重製頁面
    e.preventDefault()
  }

  return (
    <form id="searchChannel" onSubmit={ handleSubmit }>
      <input type="search" value={channelName} onChange={(e) => {setChannelName(e.target.value)}}/>
      <button type="submit" from="searchChannel"><FontAwesomeIcon icon={ faMagnifyingGlass } /></button>
    </form>
  )
};

export default SearchBlock;