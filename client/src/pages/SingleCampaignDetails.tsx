import React, { ReactElement, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import SingleCampaignDonateButton from "../components/SingleCampaignDonateButton";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


import { CampaignI } from "./Campaigns";

export default function SingleCampaign(): ReactElement {

  let [campaign, setCampaign] = useState<CampaignI | null>(null);


  let { id } = useParams();

  useEffect(() => {
    async function getCampaign(id: any) {
      try {
        const { data } = await axios.get(`/api/campaigns/${id}`);
        setCampaign(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCampaign(id)
  }, [campaign]);

  return (
    <div className="blog-post" 
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '70px'
      }}>
      <h1>{campaign?.title || "Title"}</h1>
      <span>{campaign?.description}</span>
      <img src={campaign?.photoUrl} alt={campaign?.description}/>
      <div className="blog-post-content" />
      <SingleCampaignDonateButton/>
    </div>
  );
}
