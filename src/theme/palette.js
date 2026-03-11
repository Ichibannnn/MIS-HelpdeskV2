const palette = (mode) => ({
  mode,
  ...(mode === "light"
    ? {
        primary: { main: "#9e77ed" },
        secondary: { main: "#3f305f" },
        success: { main: "#22c55e" },
        warning: { main: "#f59e0b" },
        error: { main: "#ef4444" },
        background: {
          default: "#F1F1F1",
          paper: "#FDFDFD",
        },
      }
    : {
        primary: { main: "#9e77ed" },
        secondary: { main: "#3f305f" },
        success: { main: "#22c55e" },
        warning: { main: "#f59e0b" },
        error: { main: "#ef4444" },
        background: {
          default: "#0f172a",
          paper: "#1e293b",
        },
      }),
});

export default palette;
