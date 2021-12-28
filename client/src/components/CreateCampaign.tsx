import React, { ReactElement } from "react";
import FormGroup from "@mui/material/FormGroup";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "./formComponents/TextInput";

interface Props {}

export default function CreateCampaign({}: Props): ReactElement {
  const { handleSubmit, control } = useForm();
  return (
    <FormGroup>
      <TextInput name={"title"} label={"title"} control={control}></TextInput>
      <TextInput
        name={"description"}
        label={"description"}
        control={control}
      ></TextInput>
      <TextInput
        name={"photoUrl"}
        label={"photoUrl"}
        control={control}
      ></TextInput>
    </FormGroup>
  );
}
