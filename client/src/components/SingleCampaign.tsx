import React, { ReactElement, useEffect, useState } from "react";

import axios from "axios";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

interface Props {
  detail: boolean;
}

export default function SingleCampaign(
  props: any,
  { detail }: Props
): ReactElement {
  let [campaign, setCampaign] = useState({});
  const campaignID = props.match ? props.match.params.id : props.id;

  useEffect(() => {
    async function getCampaign(id: number) {
      try {
        const response = await axios.get(`/campaigns/${id}`);
        const data = response.data;
        setCampaign(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCampaign(campaignID);
  }, [campaignID]);
  return (
    <div>
      {!campaign.length ? (
        <div>Nothing here yet.</div>
      ) : (
        <Card>
          <CardContent>
            <Typography>{campaign.title}</Typography>
          </CardContent>
          <CardMedia image={campaign.photoUrl} title={campaign.title} />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {campaign.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {campaign.description}
            </Typography>

            <div>
              <Typography gutterBottom variant="h5" component="h2">
                AMOUNT RAISED: ${campaign.received}
              </Typography>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
