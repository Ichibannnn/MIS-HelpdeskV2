const palette = (mode) => ({
  mode,
  ...(mode === "light"
    ? {
        background: {
          default: "#f4f6f8",
          paper: "#ffffff",
        },
        text: {
          primary: "#000",
        },
      }
    : {
        background: {
          default: "#121212",
          paper: "#1e1e1e",
        },
        text: {
          primary: "#fff",
        },
      }),
  primary: {
    main: "#1976d2",
  },
});

export default palette;
