import React, { ReactElement, useState, useEffect } from "react";

import SingleCampaign from "./SingleCampaign";

import { Grid } from "@material-ui/core";

import axios from "axios";

export interface CampaignI {
  id?: any;
  title?: string;
  description?: string;
  photoUrl?: string;
  status?: boolean;
  raised?: number;
  profile?: boolean;
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
