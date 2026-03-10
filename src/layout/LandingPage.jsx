import { Box, Stack } from "@mui/material";

import Sidebar from "./Sidebar";
import Header from "./Header";

import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <Stack direction="row" height="100vh">
      <Sidebar />

      <Box>
        <Header />
        <Outlet />
      </Box>
    </Stack>
  );
};

export default LandingPage;
