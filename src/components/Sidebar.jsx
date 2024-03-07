import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

// Component to display categories
const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {/* Map through categories and render buttons */}
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory ? "#FC1503" : "transparent",
          color: category.name === selectedCategory ? "white" : "red",
        }}
        key={category.name}
      >
        {/* Render category icon and name */}
        <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories; // Export Categories component
