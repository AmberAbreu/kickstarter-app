import React, { ReactElement, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SingleCampaign from "../components/SingleCampaign";

import { Grid } from "@material-ui/core";

import axios from "axios";

export interface CampaignI {
    id: any;
    title: string;
    description: string;
    photoUrl: string;
    isHomePage?: boolean;

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
    <>
      {loading ? (
        <Link to="create">Create a Campaign?</Link>
      ) : (
        <Grid container spacing={3}>
          {campaigns.map((campaign: CampaignI) => {
            return <SingleCampaign id={campaign.id} title={campaign.title} description={campaign.description} photoUrl={campaign.photoUrl} isHomePage={true}/>;
          })}
        </Grid>
      )}
    </>
  );
}
