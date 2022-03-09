import axios from 'axios';

// YouTube頻道資訊 API
const channelRequest = axios.create({
  baseURL: ''
});

// YouTube影片資訊 API
const videoRequest = axios.create({
  baseURL: ''
});

export const apiChannelId = data => channelRequest.post('', data);