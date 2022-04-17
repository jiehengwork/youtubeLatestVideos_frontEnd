import React from "react";
// css
import { StyleVideoItemA, StyleImg, StyleDiv, StyleH3, StyleP } from "./style";
// redux
import { useDispatch } from "react-redux";


const VideoItem = ({ data }) => {

  const updateArrayDispatch = useDispatch();
  
  const putVideoFirst = () => {
    updateArrayDispatch({
      type: 'PUT_FIRST',
      payload: { item: data.channelId }
    })
  }

  return (
    <StyleVideoItemA onClick={ putVideoFirst }>
      <StyleImg title={data.videoTitle} src={ data.videoSmallImg } alt="channelImg"/>
      <StyleDiv>
        <StyleH3 title={data.videoTitle}>{ data.videoTitle }</StyleH3>
        <StyleP title={data.channelTitle}>{ data.channelTitle }</StyleP>
      </StyleDiv>
    </StyleVideoItemA>
)};

export default VideoItem;