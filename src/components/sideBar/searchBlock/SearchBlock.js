import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// css
import { FormStyle, InputStyle, ButtonStyle } from "./style";

const SearchBlock = () => {

  const [ channelName, setChannelName ] = useState('');

  const handleSubmit = (e) => {
    console.log(channelName)
    // 阻止 form submit 重製頁面
    e.preventDefault()
  }

  return (
    <FormStyle id="searchChannel" onSubmit={ handleSubmit }>
      <InputStyle type="search" value={channelName} onChange={(e) => {setChannelName(e.target.value)}}/>
      <ButtonStyle type="submit" from="searchChannel"><FontAwesomeIcon icon={ faMagnifyingGlass } /></ButtonStyle>
    </FormStyle>
  )
};

export default SearchBlock;