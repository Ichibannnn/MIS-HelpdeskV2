import { useThemeMode } from "../../context/ThemeContext";
import { Box, Button, IconButton, InputAdornment, Stack, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import helpdeskVector from "../../assets/svg/loginVector.svg";
import helpDeskLogo from "../../assets/png/helpdesk_icon.png";

import useDisclosure from "../../hooks/useDisclosure";
import { useToast } from "../../context/ToastProvider";

import TextFieldControlled from "../../components/controlled/TextFieldControlled";
import { useSignInMutation } from "../../feature/login/loginApi";
import { useDispatch } from "react-redux";
import { signIn } from "../../feature/auth/authSlice";
import { setUserDetails } from "../../feature/user/userSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Stack direction="row" className={mode === "light" ? "login-page-light" : "login-page-dark"}>
      <Stack className={mode === "light" ? "login-form-light" : "login-form-dark"} direction="row" p={1}>
        <Stack
          className="login-paper-left"
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
          }}
        >
          <Stack>
            <Typography mt={5} color="white" fontWeight="bold" variant="h3" textAlign="center">
              WELCOME!
            </Typography>

            <Typography color="white" fontSize="sm" textAlign="center">
              One Team One RDF
            </Typography>
            <Box className="svg-styling" component="img" src={helpdeskVector} alt="helpdesk" />
          </Stack>
        </Stack>

        <Stack className={mode === "light" ? "login-paper-right-light" : "login-paper-right-dark"}>
          <Box>
            <img className="login-icon" src={helpDeskLogo} alt="dotek-icon" />
            <Typography variant="h5" color="text.primary">
              Sign in your Account
            </Typography>
            <Typography color="gray">Management Information System</Typography>

            <LoginForm />
          </Box>
        </Stack>
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
  const { showToast } = useToast();
  const [login, { isLoading }] = useSignInMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { open: isVisible, onToggle: onVisibleToggle } = useDisclosure();

  const {
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

  const onLoginHandler = async (data) => {
    try {
      const response = await login(data).unwrap();

      const { token, ...user } = response.value;

      dispatch(signIn());
      dispatch(setUserDetails(user));

      navigate("/");

      setTimeout(() => showToast("Success!", "Login Successfully!", "success"), 1000);
    } catch (error) {
      console.log("Error: ", error);
      showToast("Error!", error?.data.error.message, "error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onLoginHandler)}>
      <Stack p={4} gap={1.5}>
        <TextFieldControlled control={control} name="username" label="Enter your username" helperText={errors?.username?.message} error={!!errors?.username} />

        <TextFieldControlled
          control={control}
          name="password"
          label="Enter your password"
          helperText={errors?.password?.message}
          error={!!errors?.password}
          type={isVisible ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton sx={{ color: "gray" }} edge="end" aria-label="toggle password visibility" onClick={onVisibleToggle}>
                  {isVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button variant="contained" type="submit" size="large" loading={isLoading}>
          Login
        </Button>
      </Stack>
    </form>
  );
};
