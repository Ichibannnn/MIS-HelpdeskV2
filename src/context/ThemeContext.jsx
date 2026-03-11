import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import getTheme from "../theme";

const ThemeModeContext = createContext();

export const useThemeMode = () => useContext(ThemeModeContext);

// export const ThemeModeProvider = ({ children }) => {
//   const [mode, setMode] = useState("light");

//   const toggleTheme = () => {
//     setMode((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   const theme = useMemo(() => getTheme(mode), [mode]);

//   return (
//     <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {children}
//       </ThemeProvider>
//     </ThemeModeContext.Provider>
//   );
// };

// Old Theme

export const ThemeModeProvider = ({ children }) => {
  const getInitialMode = () => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) return savedMode;

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
