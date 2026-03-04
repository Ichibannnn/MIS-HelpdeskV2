const palette = (mode) => ({
  mode,
  ...(mode === "light"
    ? {
        background: {
          default: "#f6f6f6",
          paper: "#ffffff",
        },
        text: {
          primary: "#212636",
        },
        icon: {
          primary: "#6E53A5",
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
    main: "#6E53A5",
  },
});

export default palette;
