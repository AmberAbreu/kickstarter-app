import React, { ReactElement, useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import { useForm, Form } from "../components/form/useForm";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
    height: "100vh",
  },
  TextField: {
    margin: "20px",
  },
}));

export default function CreateCampaign(): ReactElement {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const initialValues = {
    title: "",
    description: "",
    photoUrl: "",
    ownerEmail: window.localStorage.getItem("user"),
  };
  const { values, setValues, handleInputChange } = useForm(initialValues);


  const handleSubmit = async () => {
    try {
      await axios.post("/api/campaigns/", values);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
      console.log("no user was found", isLoggedIn)
    }
  }, []);

  const classes = useStyles();
  return (
    <div>
       { !isLoggedIn ? <p>Please sign in.</p> : <Form>
          <Grid container className={classes.gridItem} style={{marginTop: '80px'}}>
            <Typography>Create a Campaign</Typography>
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
        </Form>}
      
    </div>
  );
}
