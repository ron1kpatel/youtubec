import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFormAPI'

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetching channel details
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    // Fetching videos
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <div 
        style={{
          height: '300px', // Set a specific height for the gradient to render
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 50%, rgba(0,212,255,1) 100%)',
          zIndex: 10
        }}

      />
        <ChannelCard channelDetail={channelDetail} marginTop={'-110px'}/>

        <Box display="flex" p="2">
            <Box sx={{
              mar: {sm: '100px' }
            }}/>

              <Videos videos={videos} />

        </Box>
    </Box>
  )
}

export default ChannelDetail