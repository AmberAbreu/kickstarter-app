import React, { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Profile from "./Profile";

import { auth } from "../config/firebase";

import axios from "axios";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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

interface CampaignI {
  id: number;
  photoUrl: string;
  title: string;
  description: string;
}

interface Props {}

export default function Home({}: Props): ReactElement {
  const [campaigns, setCampaigns] = useState<CampaignI[]>([]);
  const [token, setToken] = useState("");
  const id = 1;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/campaigns");
        setCampaigns(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const classes = useStyles();
  const recentCampaigns = [
    campaigns[campaigns.length - 1],
    campaigns[campaigns.length - 2],
    campaigns[campaigns.length - 3],
  ];

  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        window.localStorage.setItem("auth", "true");
        userCred.getIdToken().then((token) => {
          setToken(token);
        });
      }
    });
  }, []);

  const RecentCards = (campaign: CampaignI) => {
    return (
      <div>
        <Grid item>
          <Card
            key={campaign.id}
            style={{
              width: 400,
              height: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardMedia
              component="img"
              alt="Campaign Image"
              height="200"
              image={campaign.photoUrl}
              title={campaign.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h3">
                {campaign.title}
              </Typography>
              <Typography variant="body2" component="p">
                {campaign.description}
              </Typography>
            </CardContent>
            <CardActionArea className={classes.cardAction}>
              <CardActions>
                <Link to={`/campaigns/${campaign.id}`}>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    style={{ color: "#FFFFFF" }}
                  >
                    See More
                  </Button>
                </Link>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </div>
    );
  };
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
                color="secondary"
                align="left"
                gutterBottom
              >
                AchievIt
              </Typography>
              <Typography
                variant="h5"
                color="secondary"
                align="center"
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

        <div>{token ? <Profile token={token} /> : <></>}</div>

        <div>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                component="h1"
                variant="h3"
                align="center"
                color="primary"
              >
                Recommended For you
              </Typography>
            </Grid>
          </Grid>
        </div>
        {campaigns.length ? (
          <Grid container>
            {recentCampaigns.map((campaign) => {
              return (
                <RecentCards
                  id={campaign.id}
                  description={campaign.description}
                  title={campaign.title}
                  photoUrl={campaign.photoUrl}
                />
              );
            })}
          </Grid>
        ) : (
          <div> Nothing yet</div>
        )}
      </ThemeProvider>
    </div>
  );
}
