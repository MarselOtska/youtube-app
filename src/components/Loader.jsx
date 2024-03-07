// Import React library for creating React components
import React from 'react';
// Import necessary components from Material-UI library
import { Box, CircularProgress, Stack } from '@mui/material';

// Define a functional component called Loader
const Loader = () =>  (
  // Container box with minimum height to cover most of the viewport
  <Box minHeight="95vh">
    {/* Stack component to vertically and horizontally center the CircularProgress */}
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
      {/* CircularProgress component to indicate loading */}
      <CircularProgress />
    </Stack>
  </Box>
);

// Export the Loader component
export default Loader;
