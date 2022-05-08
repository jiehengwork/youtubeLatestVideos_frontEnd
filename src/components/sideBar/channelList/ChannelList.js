import React, { useEffect } from "react";
import ChannelItem from "../channelItem/ChannelItem";
import { StyledDiv, PreviewDiv } from './style'; // css
import { useSelector, useDispatch } from "react-redux"; // redux

const ChannelList = () => {
  const subscriptArrayDispatch = useDispatch()
  const opened = useSelector( state => state.previewReducer.preview ) // 預覽模式

  useEffect(() => { // 首次渲染後，從 localStorage 取出儲存的訂閱列表
    let localArrayStr = localStorage.getItem('subscriptArray');
    let localArray = localArrayStr.split(',');
    localArray.splice(0, 1)
    subscriptArrayDispatch({ // 將 localStorage 的資料更新到 Redux 的 State
      type: 'SUB_GET_LOCAL',
    })
  },[])

  let ChannelItemArray
  const subscriptArray = useSelector( state => state.subscriptArrayReducer.subscriptArray)

  if ( subscriptArray.length !== 0 ) { // 訂閱列表不為空
    ChannelItemArray = subscriptArray.map( item => {
      let itemData = localStorage.getItem(item);
      return <ChannelItem data={itemData} key={item} />
    });
  }

  // 預覽模式
  const previewData = {
    channelId: "previewData",
    channelTitle: "預覽元素",
    channelSmallImg: "https://yt3.ggpht.com/yti/APfAmoFpk2cDKzXXLaYUCkWLIlqokmootsViL-gcFcA0=s160-c-k-c0x00ffffff-no-rj",
    channelMediumImg: "https://yt3.ggpht.com/yti/APfAmoFpk2cDKzXXLaYUCkWLIlqokmootsViL-gcFcA0=s160-c-k-c0x00ffffff-no-rj",
    channelBigImg: "https://yt3.ggpht.com/yti/APfAmoFpk2cDKzXXLaYUCkWLIlqokmootsViL-gcFcA0=s160-c-k-c0x00ffffff-no-rj",
  }
  let preview = []
  for (let i = 0; i < 30; i++) {
    // preview.push(<PreviewDiv>預覽用佔位元素</PreviewDiv>)
    preview.push(<ChannelItem data={ previewData } key={ previewData.channelTitle + i } />)
  }

  return(
    <StyledDiv>
      { ChannelItemArray }
      { opened && preview }
    </StyledDiv>
)};

export default ChannelList;