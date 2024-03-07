import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

// Feed component to display videos based on selected category
const Feed = () => {
  // State for selected category and videos
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  // Effect to fetch videos based on selected category
  useEffect(() => {
    // Reset videos state
    setVideos(null);

    // Fetch videos from API based on selected category
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  // Render the component
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* Sidebar component */}
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        {/* Copyright information */}
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © Marsel Otska
        </Typography>
      </Box>

      {/* Videos section */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        {/* Category title */}
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        {/* Display videos */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed; // Export Feed component
