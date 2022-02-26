import React, { ReactElement, useState, useEffect } from "react";
import { useForm, Form } from "../components/form/useForm";

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
    false
  );
  const [authenticating, setAuthenticating] = useState(false);
  const [error, setError] = useState("");
  const { values, setValues, handleInputChange } = useForm(initialValues);

  let navigate = useNavigate();

  const handleLogin = async () => {
    await axios.post("/api/auth/login", values)
    .then((response) => {
      if (!response.data.status) {
        setAuthenticated(false)
      }else {
        localStorage.setItem("token", response.data.data.accessToken)
        localStorage.setItem("user",response.data.data.email)
        setAuthenticated(true)
        navigate('/')
      }
    })

  };

  async function verifyAuth() {
    await axios.get('/api/users', {
      headers: {
        "x-access-token": localStorage.getItem("token") || ''
      },
    }).then( (response) => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div style={{marginTop: '70px'}}>
      <Form >
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
        style={{marginLeft:'10px'}}
      >
        Login
      </Button>
      <small>
        <p>
          Don't have an account? <Link to="/signup">Sign up.</Link>
        </p>
      </small>
    </div>
  );
}
