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
};

export default function Login({}: Props): ReactElement {
  const [authenticating, setAuthenticating] = useState(false);
  const [error, setError] = useState("");
  const { values, setValues, handleInputChange } = useForm(initialValues);

  let navigate = useNavigate();

  const signInWithEmailAndPassword = () => {
    if (error !== "") setError("");
    setAuthenticating(true);
    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then((result) => {
        logging.info(result);
        console.log("result from login", result);
        navigate("/login");
      })
      .catch((error) => {
        logging.error(error);
        setAuthenticating(false);
        setError("Unable to sign in. Try again later");
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
