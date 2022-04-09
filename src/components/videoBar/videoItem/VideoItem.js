import React from "react";
// css
import { StyleVideoItemDiv, StyleImg, StyleDiv, StyleH3, StyleP } from "./style";

const VideoItem = ({ data }) => {

  console.log(data)

  return (
    <StyleVideoItemDiv>
      <StyleImg src={ data.videoSmallImg } alt="channelImg"/>
      <StyleDiv>
        <StyleH3>{ data.videoTitle }</StyleH3>
        <StyleP>{ data.channelTitle }</StyleP>
      </StyleDiv>
    </StyleVideoItemDiv>
)};

export default VideoItem;