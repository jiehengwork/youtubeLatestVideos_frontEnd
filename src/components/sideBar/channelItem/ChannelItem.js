import React from "react";
// css
import { StyleA, StyleImg, StyleP } from "./style";

const channelItem = ({ data }) => {

  return(
    <StyleA href="/#">
      <StyleImg src={ data.channelSmallImg } alt="channelImg"></StyleImg>
      <StyleP>{ data.channelTitle }</StyleP>
    </StyleA>
)};

export default channelItem;