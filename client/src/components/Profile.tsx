import React, { ReactElement, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import SingleCampaign from "./SingleCampaign";
import { CampaignI } from "./Campaigns";

import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import axios from "axios";

interface Props {
  token: string;
}

export default function Profile({ token }: Props): ReactElement {
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const id = 1;

  useEffect(() => {
    async function fetchCampaigns(token: string) {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/users/${id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCampaigns(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCampaigns(token);
  }, [token]);

  return (
    <div>
      <Typography>Active Campaigns:</Typography>
      {loading ? (
        <p>nothing yet.</p>
      ) : (
        <></>
        // <Grid container>
        //   {campaigns
        //     .map((campaign: CampaignI) => {
        //       return <SingleCampaign id={campaign.id} />;
        //     })}
        // </Grid>
      )}
    </div>
  );
}
