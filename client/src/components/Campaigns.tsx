import React, { ReactElement, useState, useEffect } from "react";
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

import axios from "axios";

// const campaigns = [
//   {
//     id: 0,
//     title: "Help us get funding",
//     photoUrl:
//       "https://s3.amazonaws.com/omiweb/wp-content/uploads/2018/02/23121159/startup.jpg",
//   },
//   {
//     id: 0,
//     title: "Funding funding",
//     photoUrl:
//       "https://s3.amazonaws.com/omiweb/wp-content/uploads/2018/02/23121159/startup.jpg",
//   },
// ];
export interface CampaignI {
  id?: any;
  title?: string;
  description?: string;
  photoUrl?: string;
  status?: boolean;
  raised?: number;
}

export default function Campaigns(): ReactElement {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCampaigns() {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/campaigns/");
        setCampaigns(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCampaigns();
  }, []);
  return (
    <div>
      {loading ? (
        <p>nothing yet.</p>
      ) : (
        <Grid container>
          {campaigns
            // .sort((a, b) => a.title.localeCompare(b.title))
            .map((campaign: CampaignI) => {
              return <SingleCampaign id={campaign.id} />;
            })}
        </Grid>
      )}
    </div>
  );
}
