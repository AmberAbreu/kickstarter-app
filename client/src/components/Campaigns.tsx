import React, { ReactElement, useState } from "react";
import SingleCampaign from "./SingleCampaign";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

interface Props {}

export default function Campaigns({}: Props): ReactElement {
  const [campaigns, setCampaigns] = useState([]);
  return (
    <div>
      <Grid container>
        {campaigns
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((campaign) => {
            return (
              <Grid item key={campaign.id}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Campaign Image"
                      height="140"
                      image={campaign.photoUrl}
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {campaign.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/campaigns/${campaign.id}`}>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ color: "#FFFFFF" }}
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
