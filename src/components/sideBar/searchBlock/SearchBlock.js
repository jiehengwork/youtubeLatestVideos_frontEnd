import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // font awesome
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons' // font awesome
import { apiChannel } from "../../../api/api"; // api
import { StyleSearchBlock, StyleForm, StyleInput, StyleButton, ErrorDiv } from "./style"; // css
import ChannelItem from "../channelItem/ChannelItem";

const SearchBlock = () => {
  const [ channelName, setChannelName ] = useState(''); // 使用者的輸入
  const [ apiData, setAPIData ] = useState( undefined ); // API 回傳的 YouTube 頻道資料
  
  const inputHandler = ( e ) => { // 使用者點擊輸入框時，重製搜尋結果
    setAPIData( undefined )
  }

  // 使用者點擊搜尋
  const submitHandler = ( e ) => {
    e.preventDefault()

    callSearchChannelAPI()
    setChannelName('') // 重製輸入
  }

  const callSearchChannelAPI = () => { // axios 後端API 取得頻道資訊
    apiChannel({ // call API
      channelName: channelName
    })
    .then( res => {
      if ( res.data === 'error' ) { // 若 API 回傳錯誤 ( error code 202: GCP 配額用盡 )
        setAPIData( 'error' )
      }

      localStorage.setItem('searchChannelId', res.data.channelId) // 將回傳的 YouTube 頻道資料存在 localStorage
      setAPIData( res.data )
    })
    .catch ( e => setAPIData( 'error' ) )
  }

  let searchItem
  if ( apiData !== 'error' ) { // API 回傳正常
    searchItem = <ChannelItem data={apiData}/>
  } else { // API 回傳錯誤
    searchItem = <ErrorDiv>找不到此頻道，請重新搜尋</ErrorDiv>
  }

  return (
    <StyleSearchBlock>
      <StyleForm id="searchChannel" onSubmit={ submitHandler }>
        <StyleInput type="search" value={channelName} onChange={(e) => {setChannelName(e.target.value)}} onClick={ inputHandler }/>
        <StyleButton type="submit" from="searchChannel"><FontAwesomeIcon icon={ faMagnifyingGlass } /></StyleButton>
      </StyleForm>
      { apiData && searchItem }
    </StyleSearchBlock>
  )
};

export default SearchBlock;