import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
    //   relatedToVideoId: '7ghhRHRP6t4',
    //   part: 'id,snippet',
    //   type: 'video',
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': '5590125f2amsh2012b55456942dfp1da21cjsn3cd015f8910a',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const fetchFromAPI = async (url) => {
     const {data} =   await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }