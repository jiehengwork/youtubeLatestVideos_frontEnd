import React from "react";
// css
import { StyleVideoItemDiv, StyleImg, StyleDiv, StyleH3, StyleP } from "./style";

const VideoItem = ({ data }) => {

  return (
    // <StyleVideoItemDiv>
    //   <StyleImg src="https://i.ytimg.com/vi/MT0pY5KPJ2A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8cvq-eVDy3cW-QDaLT20ARumMow" alt="channelImg"/>
    //   <StyleDiv>
    //     <StyleH3>videoTitle000000000000000</StyleH3>
    //     <StyleP>channelTitle00000000000000</StyleP>
    //   </StyleDiv>
    // </StyleVideoItemDiv>
    <StyleVideoItemDiv>
      <StyleImg src={ data.videoSmallImg } alt="channelImg"/>
      <StyleDiv>
        <StyleH3>{ data.videoTitle }</StyleH3>
        <StyleP>{ data.channelTitle }</StyleP>
      </StyleDiv>
    </StyleVideoItemDiv>
)};

export default VideoItem;