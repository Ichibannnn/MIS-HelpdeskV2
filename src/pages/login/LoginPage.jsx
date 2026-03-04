import { useThemeMode } from "../../context/ThemeContext";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import helpdeskVector from "../../assets/svg/loginVector.svg";
import helpDeskLogo from "../../assets/png/helpdesk_icon.png";

import TextFieldControlled from "../../components/controlled/TextFieldControlled";

const LoginPage = () => {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Stack direction="row" className={mode === "light" ? "login-page-light" : "login-page-dark"}>
      <Stack className="login-paper-left" sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
        <Typography mt={5} color="white" fontWeight="bold" variant="h3">
          WELCOME!
        </Typography>
        <Typography color="white" fontSize="sm">
          One Team One RDF
        </Typography>
        <Box className="svg-styling" component="img" src={helpdeskVector} alt="helpdesk" />
      </Stack>

      <Stack className={mode === "light" ? "login-paper-right-light" : "login-paper-right-dark"}>
        <Box>
          <img className="login-icon" src={helpDeskLogo} alt="dotek-icon" />
          <Typography variant="h5" color="text.primary">
            Sign in your Account
          </Typography>
          <Typography color="gray">Management Information System</Typography>

          {/* <IconButton color="primary" onClick={toggleTheme}>
            {mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton> */}

          <LoginForm />
        </Box>
      </Stack>
    </Stack>
  );
};

export default LoginPage;

const schema = yup.object().shape({
  username: yup.string().required().label("Username"),
  password: yup.string().required().label("Password"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  console.log("Watch: ", watch("username"));

  const onLoginHandler = (data) => {
    console.log("Data: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onLoginHandler)}>
      <Stack p={4} gap={1.5}>
        <TextFieldControlled control={control} name="username" label="Enter your username" helperText={errors?.username?.message} error={!!errors?.username} />
        <TextFieldControlled control={control} name="password" label="Enter your password" helperText={errors?.password?.message} error={!!errors?.password} />

        <Button variant="contained" type="submit" size="large">
          Login
        </Button>
      </Stack>
    </form>
  );
};
