import { createTheme } from "@mui/material/styles";
import palette from "./palette.js";
import components from "./components.js";
import typography from "./typography.js";

const getTheme = (mode) =>
  createTheme({
    palette: palette(mode),
    typography: typography(mode),
    components,
    shape: {
      borderRadius: 10,
    },
  });

export default getTheme;
