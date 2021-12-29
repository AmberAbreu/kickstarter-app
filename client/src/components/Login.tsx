//need to figure out onsubmit + firebase configurations
//confirm password field does not allow any inputs

import React, { FC, ReactElement, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles.css";

import { Form, useForm } from "./formComponents/useForm";

import { auth } from "../config/firebase";
import logging from "../config/logging";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

interface Props {
  hasAccount?: boolean;
}

const initialValues = {
  email: "",
  password: "",
  confirm: "",
};

const Login: FC<Props> = ({ hasAccount }) => {
  const { values, setValues, handleInputChange } = useForm(initialValues);
  const onSubmit = (data: any) => {
    signUpWithEmailAndPassword();
    console.log(data);
  };

  const [registering, setRegistering] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();
  const signUpWithEmailAndPassword = () => {
    if (values.password !== values.confirm)
      setError("Please make sure your passwords match.");
    if (error !== "") setError("");
    setRegistering(true);

    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((result) => {
        logging.info(result);
        navigate("/login");
      })
      .catch((error) => {
        //can use console.log, but tutorial I was using used a logging library
        logging.error(error);
        if (error.code.includes("auth/weak-password")) {
          setError("Please enter a stronger password.");
        } else if (error.code.includes("auth.email-already-in-use")) {
          setError("Email already in use");
        } else {
          setError("Unable to register. Please try again later.");
        }
        setRegistering(false);
      });
  };

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            name="email"
            label="email"
            value={values.name}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            name="password"
            label="password"
            value={values.password}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            name="confirm password"
            label="confirm password"
            value={values.confirm}
            onChange={handleInputChange}
          />
          <Button disabled={registering}>Sign up</Button>
        </Grid>
      </Grid>
    </Form>
  );
};
export default Login;
