import { Box, Stack } from "@mui/material";

import Sidebar from "./Sidebar";
import Header from "./Header";

import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <Stack direction="row" height="100vh" width="100%">
      <Sidebar />

      <Stack sx={{ height: "100%", overflowY: "auto", flex: 1 }}>
        <Header />

        <Stack className="content">
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LandingPage;
