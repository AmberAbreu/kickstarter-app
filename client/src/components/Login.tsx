import React, { FC, ReactElement, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles.css";
import { Controller, useForm } from "react-hook-form";
import Container from "@material-ui/core/Container";
import FormGroup from "@mui/material/FormGroup";

import { auth } from "../config/firebase";
import logging from "../config/logging";

import { TextInput } from "../components/formComponents/TextInput";

import Button from "@material-ui/core/Button";

interface Props {
  hasAccount?: boolean;
}

const Login: FC<Props> = ({ hasAccount }) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data: any) => {
    signUpWithEmailAndPassword();
    console.log(data);
  };

  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();
  const signUpWithEmailAndPassword = () => {
    if (password !== confirm)
      setError("Please make sure your passwords match.");
    if (error !== "") setError("");
    setRegistering(true);

    auth
      .createUserWithEmailAndPassword(email, password)
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
    <Container maxWidth="sm">
      <FormGroup>
        <TextInput name={"email"} control={control} label={"email"} />
        <TextInput name={"password"} control={control} label={"password"} />
        <TextInput
          name={"password confirmation"}
          control={control}
          label={"confirm password"}
        />
        <Button disabled={registering} onClick={handleSubmit(onSubmit)}>
          Sign up
        </Button>
        <small>
          <p>
            Already have an account <Link to="/login">Login</Link>{" "}
          </p>
        </small>
      </FormGroup>
    </Container>
  );
};
export default Login;
