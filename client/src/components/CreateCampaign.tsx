import React, { ReactElement, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "./formComponents/TextInput";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const initialValues = {
  title: "",
  description: "",
  photoUrl: "",
  status: true,
  raised: 0,
};

interface Props {}

export default function CreateCampaign({}: Props): ReactElement {
  const [values, setValues] = useState(initialValues);
  const classes = useStyles();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };
  return (
    <form className={classes.root}>
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
    </form>
  );
}
