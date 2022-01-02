import React, { ReactElement, useState, useEffect } from "react";
import { useForm, Form } from "./formComponents/useForm";

import { useNavigate, Link } from "react-router-dom";

import { auth } from "../config/firebase";
import logging from "../config/logging";
import { TextField, Button } from "@material-ui/core";

interface Props {}

const initialValues = {
  email: "",
  password: "",
};

export default function Login({}: Props): ReactElement {
  const [authenticated, setAuthenticated] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );
  const [token, setToken] = useState("");
  const [authenticating, setAuthenticating] = useState(false);
  const [error, setError] = useState("");
  const { values, setValues, handleInputChange } = useForm(initialValues);

  let navigate = useNavigate();

  const signInWithEmailAndPassword = () => {
    if (error !== "") setError("");
    setAuthenticating(true);
    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then((userCred) => {
        // logging.info(result);
        console.log("result from login", userCred);
        if (userCred) {
          setAuthenticated(true);
          window.localStorage.setItem("auth", "true");
        }
        navigate("/");
      })
      .catch((error) => {
        logging.error(error);
        setAuthenticating(false);
        setError("Unable to sign in. Try again later");
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        setAuthenticated(true);
        window.localStorage.setItem("auth", "true");
        userCred.getIdToken().then((token) => {
          setToken(token);
        });
      }
    });
  }, []);

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
      </Form>
      <Button
        disabled={authenticating}
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        onClick={() => signInWithEmailAndPassword()}
      >
        Login
      </Button>
      <small>
        <p>
          Already have an account? <Link to="/login">Login.</Link>{" "}
        </p>
      </small>
    </div>
  );
}
