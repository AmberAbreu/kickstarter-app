import React, { ReactElement } from "react";

import SingleCampaign from "./SingleCampaign";

import Typography from "@material-ui/core/Typography";

interface Props {}

// const campaign = {
//   id: 0,
//   title: "Help us get funding",
//   photoUrl:
//     "https://s3.amazonaws.com/omiweb/wp-content/uploads/2018/02/23121159/startup.jpg",
//   received: 10,
//   description: "We are a startup trying to get funding",
// };

export default function Profile({}: Props): ReactElement {
  return (
    <div>
      <Typography>Active Campaigns:</Typography>
    </div>
  );
}
