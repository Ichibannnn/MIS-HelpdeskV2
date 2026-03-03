import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

function App() {
  return (
    // <ThemeProvider>
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
    // </ThemeProvider>
  );
}

export default App;
