import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import components from "./components.js";

const getTheme = (mode) =>
  createTheme({
    palette: palette(mode),
    components,
    shape: {
      borderRadius: 10,
    },
    typography: {
      fontFamily: "Plus Jakarta Sans",
      h6: {
        display: "block",
        marginBlockStart: "2.33rem",
        marginBlockEnd: "2.33rem",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
      },

      h5: {
        color: mode === "light" ? "#000" : "#fff",
      },
    },
  });

export default getTheme;
