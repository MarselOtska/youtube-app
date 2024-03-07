// Importing necessary modules from Material-UI
import { Stack } from "@mui/material";

// Importing Link component from React Router
import { Link } from "react-router-dom";

// Importing constants and components
import { logo } from "../utils/constants";
import { SearchBar } from "./";

// Defining the Navbar component
const Navbar = () => (
  // Rendering a stack for arranging elements horizontally with specified styling
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    {/* Rendering a link to the homepage with a logo */}
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    {/* Rendering the search bar */}
    <SearchBar />
  </Stack>
);

// Exporting the Navbar component
export default Navbar;
