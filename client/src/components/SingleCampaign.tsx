import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { CampaignI } from "./Campaigns";

// const campaign = {
//   id: 0,
//   title: "Help us get funding",
//   photoUrl:
//     "https://s3.amazonaws.com/omiweb/wp-content/uploads/2018/02/23121159/startup.jpg",
//   received: 10,
//   description: "We are a startup trying to get funding",
// };

export default function SingleCampaign({
  id,
  title,
  description,
  photoUrl,
  status,
  raised,
}: CampaignI): ReactElement {
  let [campaign, setCampaign] = useState<CampaignI | null>(null);
  let { id: paramsId } = useParams();

  useEffect(() => {
    console.log(paramsId);
    async function getCampaign(id: number) {
      try {
        const { data } = await axios.get(`/api/campaigns/${id}`);
        setCampaign(data);
      } catch (err) {
        console.log(err);
      }
    }
    {
      id ? getCampaign(id) : getCampaign(Number(paramsId));
    }
  }, []);
  return (
    <div>
      {!campaign ? (
        <div>Nothing here yet.</div>
      ) : (
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
                {campaign.title}
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
      )}
    </div>
  );
}
