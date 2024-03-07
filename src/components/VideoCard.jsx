// Import necessary modules and components
import React from 'react'; // Import React library
import { Link } from "react-router-dom"; // Import Link component from react-router-dom for navigation
import { Typography, Card, CardContent, CardMedia } from "@mui/material"; // Import Typography, Card, CardContent, and CardMedia components from Material-UI library
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Import CheckCircleIcon component from Material-UI library

// Import constants for demo data
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

// Define a functional component called VideoCard
const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  // Card component to display video details
  <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
    {/* Link to the video page */}
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      {/* CardMedia component for displaying video thumbnail */}
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title}
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }}
      />
    </Link>
    {/* CardContent component for video title and channel details */}
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      {/* Link to the video page */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        {/* Typography component for video title */}
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {/* Display video title */}
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      {/* Link to the channel page */}
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        {/* Typography component for channel title */}
        <Typography variant="subtitle2" color="gray">
          {/* Display channel title */}
          {snippet?.channelTitle || demoChannelTitle}
          {/* CheckCircleIcon component for indicating verified channel */}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

// Export the VideoCard component
export default VideoCard;
