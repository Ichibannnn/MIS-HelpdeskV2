const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        padding: "8px 18px",
      },
    },
    defaultProps: {
      disableElevation: true,
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      size: "small",
      fullWidth: true,
    },
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
      },
    },
  },

  MuiTableCell: {
    styleOverrides: {
      head: {
        fontWeight: 700,
      },
    },
  },
};

export default components;
