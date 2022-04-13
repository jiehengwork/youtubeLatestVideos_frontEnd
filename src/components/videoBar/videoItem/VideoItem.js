import React from "react";
// css
import { StyleVideoItemDiv, StyleImg, StyleDiv, StyleH3, StyleP } from "./style";

const VideoItem = ({ data }) => {

  console.log(data)

  return (
    <StyleVideoItemDiv>
      <StyleImg title={data.videoTitle} src={ data.videoSmallImg } alt="channelImg"/>
      <StyleDiv>
        <StyleH3 title={data.videoTitle}>{ data.videoTitle }</StyleH3>
        <StyleP title={data.channelTitle}>{ data.channelTitle }</StyleP>
      </StyleDiv>
    </StyleVideoItemDiv>
)};

export default VideoItem;