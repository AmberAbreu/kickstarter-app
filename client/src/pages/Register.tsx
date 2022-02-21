import React, { ReactElement, useState } from "react";
import { useForm, Form } from "../components/form/useForm";

import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

import { TextField, Button } from "@material-ui/core";

interface Props {}

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Register({}: Props): ReactElement {
  const [error, setError] = useState("");
  const { values, setValues, handleInputChange } = useForm(initialValues);
  const [accessToken, setAccessToken] = useState("");
  let navigate = useNavigate();

  const handleSignUp = async () => {
    if (values.password !== values.confirmPassword) {
      console.error("passwords do not match");
    }
    let { data }: any = await axios.post("/api/auth/", {
      name: values.name,
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response)
    });
  };

  return (
    <div>
      <Form>
        <TextField
          variant="outlined"
          label="name"
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
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
        onClick={handleSignUp}
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
