import React, { useState, useEffect } from "react";
// css
import { StyleA, StyleImg, StyleP, StyleButton } from "./style";

const ChannelItem = ({ data }) => {

  const [ subscriptionStatus, setSubscriptionStatus ] = useState(false)
  
  useEffect(() => {
    if (localStorage.getItem(data.channelId) !== null) {
      setSubscriptionStatus(true);
    } else {
      setSubscriptionStatus(false);
    }
  },[]);

  const buttonHandler = () => {
    if ( subscriptionStatus === false) {
      localStorage.setItem(data.channelId, '');
    } else {
      localStorage.removeItem(data.channelId);
    }
    setSubscriptionStatus(current => !current);
  };

  return(
    <StyleA href="/#">
      <StyleImg src={ data.channelSmallImg } alt="channelImg"></StyleImg>
      <StyleP>{ data.channelTitle }</StyleP>
      { !subscriptionStatus && <StyleButton onClick={ buttonHandler }>訂閱</StyleButton> }
      { subscriptionStatus && <StyleButton onClick={ buttonHandler }>退訂</StyleButton> }
    </StyleA>
)};

export default ChannelItem;