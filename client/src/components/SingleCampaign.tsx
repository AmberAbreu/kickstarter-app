import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import { useForm, Form } from "./formComponents/useForm";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { CampaignI } from "./Campaigns";

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
  profile,
}: CampaignI): ReactElement {
  const initialValues = {
    title: title,
    description: description,
    photoUrl: photoUrl,
  };
  const { values, setValues, handleInputChange } = useForm(initialValues);
  let [campaign, setCampaign] = useState<CampaignI | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let { id: paramsId } = useParams();

  const [paymentCompleted, setPaymentCompleted] = useState(false);

  useEffect(() => {
    console.log(title, description);
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

  const handleSubmit = async () => {
    try {
      await axios.put(`/api/campaigns/${id}`, values);
    } catch (err) {
      console.log(err);
    }
  };
  // fix this so that it opens up and alert or modal to confirm delete and then deletes.
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/campaigns/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

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
                            {/* <DonateButton
                              amount={2000}
                              setPaymentCompleted={setPaymentCompleted}
                            /> */}
                          </Elements>
                        </div>
                      </React.Fragment>
                    )}
                  </div>
                </>
              )}
              {profile ? (
                <>
                  <Button variant="outlined" onClick={handleClickOpen}>
                    Edit
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        To subscribe to this website, please enter your email
                        address here. We will send updates occasionally.
                      </DialogContentText>
                      <Form>
                        <TextField
                          variant="outlined"
                          label="title"
                          name="title"
                          value={values.title}
                          onChange={handleInputChange}
                        />
                        <TextField
                          variant="outlined"
                          label="description"
                          name="description"
                          value={values.description}
                          onChange={handleInputChange}
                        />
                        <TextField
                          variant="outlined"
                          name="photoUrl"
                          label="photoUrl"
                          value={values.photoUrl}
                          onChange={handleInputChange}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          onClick={handleSubmit}
                        >
                          Submit
                        </Button>
                      </Form>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={handleClose}>Subscribe</Button>
                    </DialogActions>
                  </Dialog>
                  <Button onClick={handleDelete}>Delete</Button>{" "}
                </>
              ) : (
                <></>
              )}
            </CardActions>
          </Card>
        </Grid>
      )}
    </div>
  );
}
