import React, { ReactElement, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SingleCampaign from './SingleCampaign'

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";

interface CampaignI {
  id: number;
  photoUrl: string;
  title: string;
  description: string;
}

const useStyles = makeStyles(() => ({
  cardAction: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
  },
}));

export default function Recommended(): ReactElement {
  const [campaigns, setCampaigns] = useState<CampaignI[]>([]);

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
  const recommended = [
    campaigns[campaigns.length - 1],
    campaigns[campaigns.length - 2],
    campaigns[campaigns.length - 3],
  ];

  const classes = useStyles();
  return (
    <>
      <Typography component="h1" variant="h3" align="center" color="primary">
        Recommended
      </Typography>
      <div className={classes.container}>
        {campaigns.length ? (
          <Grid container className={classes.container} spacing={3}>
            {recommended.map((campaign) => (
              <SingleCampaign id={campaign.id} title={campaign.title} description={campaign.description} photoUrl={campaign.photoUrl} />
            ))}
          </Grid>
        ) : (
          <p>Nothing yet</p>
        )}
      </div>
    </>
  );
}
