import React, { ReactElement, useState, useEffect } from "react";
import { useForm, Form } from "./formComponents/useForm";

import { useNavigate, Link } from "react-router-dom";

import { TextField, Button } from "@material-ui/core";

import axios from "axios";

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

  const handleLogin = async () => {
    let { data } = await axios.post("/api/auth/login", values);
    window.localStorage.setItem("token", JSON.stringify(data.data));
    navigate("/");
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
        onClick={handleLogin}
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
