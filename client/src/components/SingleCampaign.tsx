import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { CampaignI } from "./Campaigns";

// const campaign = {
//   id: 0,
//   title: "Help us get funding",
//   photoUrl:
//     "https://s3.amazonaws.com/omiweb/wp-content/uploads/2018/02/23121159/startup.jpg",
//   received: 10,
//   description: "We are a startup trying to get funding",
// };

interface Props {
  detail: boolean;
}

export default function SingleCampaign(
  props: any,
  { detail }: Props
): ReactElement {
  let [campaign, setCampaign] = useState<CampaignI | null>(null);
  let { id } = useParams();

  useEffect(() => {
    console.log(typeof id);
    async function getCampaign(id: number) {
      try {
        const { data } = await axios.get(`/api/campaigns/${id}`);
        setCampaign(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCampaign(Number(id));
  }, []);
  return (
    <div>
      {!campaign ? (
        <div>Nothing here yet.</div>
      ) : (
        <Card>
          <CardContent>
            <Typography>{campaign!.title}</Typography>
          </CardContent>
          <CardMedia image={campaign!.photoUrl} title={campaign!.title} />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {campaign!.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {campaign!.description}
            </Typography>

            <div>
              <Typography gutterBottom variant="h5" component="h2">
                AMOUNT RAISED: ${campaign!.received}
              </Typography>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
