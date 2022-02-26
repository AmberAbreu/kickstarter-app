import React from 'react'
import PropTypes from 'prop-types'

import  { CampaignI } from '../pages/Campaigns'

import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	cardAction: {
	  display: "flex",
	  flexDirection: "column",
	  justifyContent: "space-between",
	},
	container: {
	  display: "flex",
	  alignItems: "center",
	  justifyContent: "center",
	  margin: "10px",
	},
  }));


function SingleCampaign({id, title, description, photoUrl, isHomePage}: CampaignI) {
	const classes = useStyles();
  return (
	<Grid item>
                <Card
                  key={id}
                  style={{
                    width: 400,
                    height: 400,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="Campaign Image"
                    height="200"
                    image={photoUrl}
                    title={title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h3">
                      {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {description}
                    </Typography>
                  </CardContent>
                  <CardActionArea className={classes.cardAction}>
                    <CardActions>
                      <Link to={`/campaigns/${id}`}  style={{  textDecoration: 'none'}}>
                        <Button
                          size="small"
                          color="primary"
                          variant="contained"
                          style={{ color: "#FFFFFF" }}
                        >
                          See More
                        </Button>
                      </Link>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
  )
}

SingleCampaign.propTypes = {}

export default SingleCampaign
