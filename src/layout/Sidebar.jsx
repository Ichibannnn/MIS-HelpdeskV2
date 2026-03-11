import { Stack } from "@mui/material";

const Sidebar = () => {
  return (
    <Stack className="sidebar" sx={{ backgroundColor: "background.paper" }}>
      <SidebarHeader />
      <SidebarList />
      <SidebarFooter />
    </Stack>
  );
};

export default Sidebar;

const SidebarHeader = () => {};

const SidebarList = () => {};

const SidebarFooter = () => {};
