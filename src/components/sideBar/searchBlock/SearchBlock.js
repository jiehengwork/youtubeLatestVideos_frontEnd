import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// axios
import axios from 'axios';
// css
import { StyleForm, StyleInput, StyleButton } from "./style";
// component
import ChannelItem from "../channelItem/ChannelItem";

const SearchBlock = () => {

  const [ channelName, setChannelName ] = useState('');
  const [ apiData, setAPIData ] = useState(undefined);
  
  // 使用者點擊搜尋
  const handleSubmit = (e) => {
    // 阻止 form submit 重製頁面
    e.preventDefault()
    callSearchChannelAPI()
  }

  // axios 後端API 取得頻道資訊
  const callSearchChannelAPI = () => {
    axios.post('http://localhost:9000/YouTubeAPI/channel/searchChannel', {
      channelName: channelName
    })
    .then( res => setAPIData(res.data))
  }

  return (
    <>
      <StyleForm id="searchChannel" onSubmit={ handleSubmit }>
        <StyleInput type="search" value={channelName} onChange={(e) => {setChannelName(e.target.value)}}/>
        <StyleButton type="submit" from="searchChannel"><FontAwesomeIcon icon={ faMagnifyingGlass } /></StyleButton>
      </StyleForm>
      { apiData && <ChannelItem data={apiData}/>}
    </>
  )
};

export default SearchBlock;