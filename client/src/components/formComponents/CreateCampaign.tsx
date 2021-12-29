import React, { ReactElement } from "react";
import TextField from "@material-ui/core/TextField";

import { useForm, Form } from "./useForm";

import Grid from "@material-ui/core/Grid";

interface initialValuesI {
  title: string;
  description: string;
  photoUrl: string;
}

const initialValues = {
  title: "",
  description: "",
  photoUrl: "",
};

export default function CreateCampaign(): ReactElement {
  const { values, setValues, handleInputChange } = useForm(initialValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="title"
            name="title"
            value={values.title}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            label="description"
            name="description"
            value={values.description}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            name="photoUrl"
            label="photoUrl"
            value={values.photoUrl}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Form>
  );
}
