// Import React and necessary components and icons
import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

// Import constant for the default profile picture
import { demoProfilePicture } from '../utils/constants';

// ChannelCard component to display channel information
const ChannelCard = ({ channelDetail, marginTop }) => (
  // Container box for styling
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
  >
    {/* Link to the channel page */}
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      {/* CardContent for channel details */}
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
        {/* CardMedia for channel image */}
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />
        {/* Channel title with check icon */}
        <Typography variant="h6">
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {/* Subscriber count */}
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard; // Export ChannelCard component
