import { useThemeMode } from "../../context/ThemeContext";
import { Box, IconButton, Stack, Typography } from "@mui/material";

import helpdeskVector from "../../assets/svg/loginVector.svg";
import helpDeskLogo from "../../assets/png/helpdesk_icon.png";
import { DarkMode, LightMode } from "@mui/icons-material";

const LoginPage = () => {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Stack
      direction="row"
      className={mode === "light" ? "login-page-light" : "login-page-dark"}
    >
      {/* Left Card */}
      <Stack className="login-paper-left">
        <Typography mt={5} color="white" fontWeight="bold" variant="h3">
          WELCOME!
        </Typography>
        <Typography color="white" fontSize="sm">
          One Team One RDF
        </Typography>
        <Box
          component="img"
          src={helpdeskVector}
          alt="helpdesk"
          className="svg-styling"
        />
      </Stack>

      {/* Right Card */}
      <Stack
        className={
          mode === "light"
            ? "login-paper-right-light"
            : "login-paper-right-dark"
        }
      >
        <Box mt={8}>
          <img src={helpDeskLogo} alt="dotek-icon" className="login-icon" />
          <Typography variant="h5" color="text.primary">
            Sign in your Account
          </Typography>
          <Typography color="gray">Management Information System</Typography>

          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>

        {/* <LoginForm /> */}
      </Stack>
    </Stack>
  );
};

export default LoginPage;

const LoginForm = () => {
  return <>Login Form</>;
};
