import React, { ReactElement, useState } from "react";
import { useForm, Form } from "./formComponents/useForm";

import { useNavigate, Link } from "react-router-dom";

import { auth } from "../config/firebase";
import logging from "../config/logging";
import { TextField, Button } from "@material-ui/core";

interface Props {}

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Register({}: Props): ReactElement {
  const [registering, setRegistering] = useState(false);
  const [error, setError] = useState("");
  const { values, setValues, handleInputChange } = useForm(initialValues);

  let navigate = useNavigate();

  const signUpWithEmailAndPassword = () => {
    if (values.password !== values.confirmPassword) {
      setError("Please make sure your passwords match.");
      return;
    }
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
    <div>
      <Form>
        <TextField
          variant="outlined"
          label="email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
        <TextField
          variant="outlined"
          label="password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
        />
        <TextField
          error={error.length ? true : false}
          id="standard-error-helper-text"
          variant="outlined"
          label="confirmPassword"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleInputChange}
          helperText={error}
        />
      </Form>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        onClick={() => signUpWithEmailAndPassword()}
      >
        Sign up
      </Button>
      <small>
        <p>
          Already have an account? <Link to="/login">Login.</Link>{" "}
        </p>
      </small>
    </div>
  );
}
