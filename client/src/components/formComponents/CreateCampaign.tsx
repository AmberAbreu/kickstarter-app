import React, { ReactElement, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

import { useForm, Form } from "./useForm";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
    height: "100vh",
  },
  TextField: {
    margin: "20px",
  },
}));

const initialValues = {
  title: "",
  description: "",
  photoUrl: "",
};

export default function CreateCampaign(): ReactElement {
  const { values, setValues, handleInputChange } = useForm(initialValues);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getToken = () => {
      window.localStorage.getItem("token");
      setIsLoggedIn(true);
    };
    getToken();
  }, [isLoggedIn]);
  function handleSubmit() {
    console.log("submit function");
  }
  const classes = useStyles();
  return (
    <div>
      {isLoggedIn ? (
        <Form>
          <Grid container className={classes.gridItem}>
            {/* <Grid className={classes.gridItem} item xs={6}> */}
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
            {/* </Grid> */}
          </Grid>
        </Form>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}
