const palette = (mode) => ({
  mode,
  ...(mode === "light"
    ? {
        background: {
          default: "#f4f6f8",
          paper: "#ffffff",
        },
      }
    : {
        background: {
          default: "#121212",
          paper: "#1e1e1e",
        },
      }),
  primary: {
    main: "#1976d2",
  },
});

export default palette;
