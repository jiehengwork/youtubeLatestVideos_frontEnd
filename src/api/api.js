import axios from 'axios';

// YouTube頻道資訊 API
const searchRequest = axios.create({
  baseURL: 'https://youtube-new-video-auto-player.herokuapp.com/YouTubeAPI/search/'
});


export const apiChannel = data => searchRequest.post('/searchChannel', data);
export const apiNewVideo = data => searchRequest.post('/searchNewVideo', data);