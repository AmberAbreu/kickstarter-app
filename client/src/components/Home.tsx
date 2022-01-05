import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Profile from "./Profile";
import Recommended from "./Recommended";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const colortheme = createTheme({
  palette: {
    primary: { main: "#A4D7C2", contrastText: "#000" },
    secondary: { main: "#3C4A3E", contrastText: "#000" },
  },
});
const useStyles = makeStyles(() => ({
  cardAction: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  align: {
    align: "center",
  },
  gridContainer: {
    height: "50vh",
  },
  titleContainer: {
    position: "relative",
    height: 500,
    backgroundColor: "white",
    color: "white",
    padding: "20px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    justifyContent: "center",
    alignItems: "center",
  },
}));

interface Props {}

export default function Home({}: Props): ReactElement {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    const getToken = () => {
      window.localStorage.getItem("token");
      setIsLoggedIn(true);
    };
    getToken();
  }, [isLoggedIn]);

  return (
    <div>
      <ThemeProvider theme={colortheme}>
        <div
          className={classes.titleContainer}
          style={{ backgroundImage: `url('assets/startup2.jpg')` }}
        >
          <div />

          <Grid container className={classes.gridContainer}>
            <Grid item>
              <Typography
                component="h2"
                variant="h1"
                color="primary"
                align="left"
                gutterBottom
              >
                AchievIt
              </Typography>
              <Typography
                variant="h5"
                color="primary"
                align="left"
                gutterBottom
              >
                Kickstarter Funding
              </Typography>
              <Link to="create">
                <Button variant="outlined" color="primary">
                  Get Started
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>

        <div>{isLoggedIn ? <Profile /> : <></>}</div>

        <Recommended />
      </ThemeProvider>
    </div>
  );
}
