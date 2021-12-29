import React, { ReactElement } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

import { useForm, Form } from "./useForm";

import Grid from "@material-ui/core/Grid";

const initialValues = {
  title: "",
  description: "",
  photoUrl: "",
};

export default function CreateCampaign(): ReactElement {
  const { values, setValues, handleInputChange } = useForm(initialValues);

  function handleSubmit() {
    console.log("submit function");
  }

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
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
