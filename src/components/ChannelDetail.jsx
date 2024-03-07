// Import React and necessary hooks and components
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

// Import custom components and utility functions
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

// ChannelDetail component to display channel details and videos
const ChannelDetail = () => {
  // State variables to store channel details and videos
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  // Get the channel ID from the route parameters
  const { id } = useParams();

  // Fetch channel details and videos from the API on component mount
  useEffect(() => {
    const fetchResults = async () => {
      // Fetch channel details
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      // Fetch videos related to the channel
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]); // Execute effect when channel ID changes

  // Render channel details and videos
  return (
    <Box minHeight="95vh">
      <Box>
        {/* Background gradient */}
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        {/* Render ChannelCard component */}
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {/* Render Videos component */}
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail; // Export ChannelDetail component
