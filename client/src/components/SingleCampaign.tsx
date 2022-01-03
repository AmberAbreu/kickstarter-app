import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { CampaignI } from "./Campaigns";
import DonateButton from "./DonateButton";

// const campaign = {
//   id: 0,
//   title: "Help us get funding",
//   photoUrl:
//     "https://s3.amazonaws.com/omiweb/wp-content/uploads/2018/02/23121159/startup.jpg",
//   received: 10,
//   description: "We are a startup trying to get funding",
// };
const stripePromise = loadStripe(
  "pk_test_51KCd1hHmzDj3FrL5iEnwBxwn9a1QoXwE2lKXN04eAfdTTL0UdcUxwLKPshctLTBe7iHJRn3Kpcw3DzdT6EcOhNCD00AZEseqrB"
);

const successMessage = () => {
  return <div className="success-msg">... ...</div>;
};
export default function SingleCampaign({
  id,
  title,
  description,
  photoUrl,
  status,
  raised,
}: CampaignI): ReactElement {
  let [campaign, setCampaign] = useState<CampaignI | null>(null);
  let { id: paramsId } = useParams();

  const [paymentCompleted, setPaymentCompleted] = useState(false);

  useEffect(() => {
    console.log(paramsId);
    async function getCampaign(id: number) {
      try {
        const { data } = await axios.get(`/api/campaigns/${id}`);
        setCampaign(data);
      } catch (err) {
        console.log(err);
      }
    }
    id ? getCampaign(id) : getCampaign(Number(paramsId));
  }, []);
  return (
    <div>
      {!campaign ? (
        <div>Nothing here yet.</div>
      ) : (
        <Grid item key={campaign.id}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Campaign Image"
                height="140"
                image={campaign.photoUrl}
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {campaign.title}
              </Typography>
            </CardContent>

            <CardActions>
              {/* Logic: if there is a params id, display the details, if not display learn more */}
              {!paramsId ? (
                <>
                  <Link to={`/campaigns/${campaign.id}`}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ color: "#FFFFFF" }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {campaign.description}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      {campaign.raised}
                    </Typography>
                  </CardContent>
                  {/* make this a seperate component, render conidtionally. */}
                  <div className="row s-box">
                    {paymentCompleted ? (
                      successMessage()
                    ) : (
                      <React.Fragment>
                        <div className="col-md-7 order-md-1">
                          <Elements stripe={stripePromise}>
                            <DonateButton
                              amount={2000}
                              setPaymentCompleted={setPaymentCompleted}
                            />
                          </Elements>
                        </div>
                      </React.Fragment>
                    )}
                  </div>
                </>
              )}
            </CardActions>
          </Card>
        </Grid>
      )}
    </div>
  );
}
