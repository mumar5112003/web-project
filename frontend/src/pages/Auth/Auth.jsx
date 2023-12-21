/* global google */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Avatar,
  Button,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import jwt_decode from "jwt-decode";

import makeStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../../actions/auth";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

const Auth = () => {
  const responseGoogle = (response) => {
    console.log("vhhvjhv" + response);
  };
  /* eslint-disable */
  useEffect(() => {
    /* global google */
    function start() {
      gapi.client.init({
        clientId:
          "508611820808-suj9olgtqmrlia7suqgbf3mbnqgjevji.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
    ReactDOM.render(
      <GoogleLogin
        clientId="508611820808-suj9olgtqmrlia7suqgbf3mbnqgjevji.apps.googleusercontent.com"
        buttonText="Login With Google"
        onSuccess={googleSuccess}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />,
      document.getElementById("signInDiv")
    );
  }, []);
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const history = useNavigate();
  const classes = makeStyles();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignUp((prevValue) => !prevValue);
    handleShowPassword(false);
  };
  const googleSuccess = async (res) => {
    console.log(JSON.stringify(res));
    const result = jwt_decode(res?.tokenObj.id_token);
    const token = res?.tokenObj.id_token;
    console.log(result);
    try {
      dispatch({ type: "AUTH", data: { result, token } });

      history("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
        <div id="signInDiv"></div>
      </Paper>
    </Container>
  );
};

export default Auth;
