import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

interface Props {}

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "orange",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    maxWidth: "100vw",
    alignContent: "space-between",
    height: 80,
    zIndex: 100,
  },
  img: {
    height: 60,
  },
  link: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
  },
  Bars: {
    display: "block",
    color: "white",
    position: "absolute",
    top: 0,
    right: 0,
    transform: "translate(-100%, 75%)",
    fontSize: "1.8rem",
    cursor: "pointer",
  },
}));

export default function NavBar({}: Props): ReactElement {
  const classes = useStyles();
  return (
    <div>
      <nav className={classes.container}>
        <div className={classes.navLinks}>
          <Link to="/">
            <Typography className={classes.link}>Home</Typography>
          </Link>
          <Link to="/create">
            <Typography className={classes.link}>Create A Campaign</Typography>
          </Link>
          <Link to="/campaigns">
            <Typography className={classes.link}>Fund a Campaign</Typography>
          </Link>
          <Link to="/profile">
            <Typography className={classes.link}>My Campaigns</Typography>
          </Link>
        </div>
      </nav>
    </div>
  );
}
