import React, { ReactElement, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


import { CampaignI } from "./Campaigns";

export default function SingleCampaign(): ReactElement {

  let [campaign, setCampaign] = useState<CampaignI | null>(null);


  let { id } = useParams();

  useEffect(() => {
    async function getCampaign(id: number) {
      try {
        const { data } = await axios.get(`/api/campaigns/${id}`);
        setCampaign(data);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return (

    <Card>
    <CardContent>
      <Typography variant="h5" component="h5">
      {campaign?.title}
      </Typography>

      
    </CardContent>
    </Card>
   
  );
}
