import React, { ReactElement, useEffect, useState } from "react";

import SingleCampaign from "../pages/SingleCampaignDetails";
import { CampaignI } from "../pages/Campaigns";

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
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return (
    <div>
      <Typography>My Campaigns:</Typography>
      {campaigns.length === 0 ? (
        <p>nothing yet.</p>
      ) : (
        <Grid container>
          {campaigns.map((campaign: CampaignI) => {
            return (
              <div></div>
            );
          })}
        </Grid>
      )}
    </div>
  );
}
