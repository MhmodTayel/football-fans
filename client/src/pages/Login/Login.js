import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { login } from "../../services/userService";
import styles from "./Login.module.scss";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const theme = createTheme();

export default function Login() {
  const [alert, setAlert] = React.useState("");
  const history = useHistory()
  React.useEffect(() => {
    setTimeout(() => {
      setAlert("");
    }, 2000);
  }, [alert]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = Object.fromEntries(data.entries());
  
    login(user).then(
      (res) => {
        localStorage.setItem("token", res.data);
        setAlert(
          <Stack sx={{ width: "auto" }} className={styles.alert} spacing={2}>
            <Alert variant="filled" severity="success">
              Logged in successfully
            </Alert>
          </Stack>
        );

        setTimeout(() => {
          history.push("/home");
        }, 3000);
      },
      (err) => {
        setAlert(
          <Stack sx={{ width: "auto" }} className={styles.alert} spacing={2}>
            <Alert variant="filled" severity="error">
              {err.response.data}
            </Alert>
          </Stack>
        );
      }
    );
  };

  return (
    <>
      {alert}
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Don't have an account? Register"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
