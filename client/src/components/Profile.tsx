import React, { ReactElement, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import SingleCampaign from "./SingleCampaign";
import { CampaignI } from "./Campaigns";

import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import axios from "axios";

interface Props {}

export default function Profile(): ReactElement {
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    async function fetchCampaigns(token: any) {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/users/`, {
          headers: {
            Authorization: token,
          },
        });
        setCampaigns(data.campaigns);
        setLoading(false);
        console.log("data from profile", data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCampaigns(window.localStorage.getItem("token"));
  }, []);

  return (
    <div>
      <Typography>Active Campaigns:</Typography>
      {campaigns.length === 0 ? (
        <p>nothing yet.</p>
      ) : (
        <Grid container>
          {campaigns.map((campaign: CampaignI) => {
            return (
              <SingleCampaign
                id={campaign.id}
                title={campaign.title}
                description={campaign.description}
                photoUrl={campaign.photoUrl}
                profile={true}
              />
            );
          })}
        </Grid>
      )}
    </div>
  );
}
