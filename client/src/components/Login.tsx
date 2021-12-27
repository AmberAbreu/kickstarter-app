import React, { FC, ReactElement, useState } from "react";
import "../styles.css";
import { Controller, useForm } from "react-hook-form";
import Container from "@material-ui/core/Container";

import { TextInput } from "../components/formComponents/TextInput";

import Button from "@material-ui/core/Button";

interface Props {
  signup?: boolean;
}

const Login: FC<Props> = ({ signup }) => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Container maxWidth="sm">
      <form>
        <TextInput name={"email"} control={control} label={"email"} />
        <TextInput name={"password"} control={control} label={"password"} />
        <TextInput
          name={"password confirmation"}
          control={control}
          label={"confirm password"}
        />
        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </form>
    </Container>
  );
};
export default Login;
