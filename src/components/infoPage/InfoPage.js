import React from 'react';
import { StyleDiv } from './style'; // css
import { Link } from 'react-router-dom';

const InfoPage = () => {

  const styleLink = {
    'border': '2px solid #dfdfdf',
    'backgroundColor': '#0e0e10',
    'textDecoration': 'none',
    'color': '#e6e6e6',
    'padding': '1% 2%',
    'fontWeight': '700',
    'marginTop': '5%',
    'marginBottom': '5%',
  }

  return (
    <StyleDiv>
      <div>
        <h2>頁面導覽：</h2>
        <br/><br/>
        <p>平時在使用 YouTube 時，因為訂閱太多頻道與推薦影片太雜，時常需要自己到想看的頻道查看是否有上新影片，或是一不留神就一部又一部的看著推薦影片，花掉了許多寶貴時間。</p>
        <p>因此我做了這個網站來嘗試解決這個問題，並練習 React 與其他相關套件，</p>
        <br/>
        <p>網站的主要功能是幫您檢查訂閱頻道是否有新影片，並集合成列表讓您觀看。其中「搜尋頻道」與「檢查是否有新影片」兩個功能需要透過 YouTube API 取得 ( 寫在後端 Express 中 )</p>
        <br/>
        <p>而 YouTube API 每天大概只有 100 次的配額，因此我限制每個頻道至少每 8 小時才會更新一次，並且在主頁右上角，點擊「預覽模式」按鈕，則會出現假資料來方便查看網頁的大致切版。</p>
        <br/>
        <h3>1. 側邊欄：</h3>
        <p>您可以在左側邊欄「搜尋」並「訂閱」 Youtube 頻道，</p>
        <p>訂閱後 與之後的 每8個小時 網頁會檢查頻道是否有新影片。</p>
        <br/>
        <h3>2. 影片列表：</h3>
        <p>新影片會顯示在畫面右邊的影片列表，您可以點擊任意影片，</p>
        <p>該影片會移至列表頂端並在畫面中間播放。</p>
        <br/>
        <h3>3. 影片播放區：</h3>
        <p>畫面中間會撥放影片列表的第一部影片，並在你「看完」該影片或「點擊下方刪除」後，</p>
        <p>紀錄您已看過以此頻道的影片，不再顯示直到該頻道下次更新影片。</p>
        <br/>
      </div>
      <Link to={ '/' } style={ styleLink }>回前頁</Link>
    </StyleDiv>
  )
};

export default InfoPage;