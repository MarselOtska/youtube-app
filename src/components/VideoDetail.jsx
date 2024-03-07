// Importing necessary modules from React and React Router
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Importing ReactPlayer component for playing videos
import ReactPlayer from "react-player";

// Importing typography components from Material-UI
import { Typography, Box, Stack } from "@mui/material";

// Importing an icon for displaying a check mark
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Importing custom components for videos and loader
import { Videos, Loader } from "./";

// Importing function for fetching data from API
import { fetchFromAPI } from "../utils/fetchFromAPI";

// Defining the VideoDetail component
const VideoDetail = () => {
  // Using state to manage the video details and related videos
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  // Getting the video ID from the URL params
  const { id } = useParams();

  // Fetching video details and related videos when the component mounts or when the video ID changes
  useEffect(() => {
    // Fetching video details
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    // Fetching related videos
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  // Rendering a loader if video details are not available yet
  if (!videoDetail?.snippet) return <Loader />;

  // Destructuring video details for easy access
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  // Rendering the video detail component
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            {/* Rendering the video player */}
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            {/* Rendering the video title */}
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            {/* Rendering the video channel information */}
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              {/* Rendering the view count and like count */}
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        {/* Rendering the related videos */}
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

// Exporting the VideoDetail component
export default VideoDetail;
