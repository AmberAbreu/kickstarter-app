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


function SingleCampaign({id, title, description, photoUrl, isHomePage}: CampaignI) {
	
  return (
	<Grid item xs={4} key={id}>
	<Card>
	  <CardActionArea>
		<CardMedia
		  component="img"
		  alt="Campaign Image"
		  height="140"
		  image={photoUrl}
		/>
	  </CardActionArea>
	  <CardContent>
		<Typography variant="h5" component="h1">
		  {title}
		</Typography>
	  </CardContent>

	  <CardActions>
			<Link to={`/campaigns/${id}`} style={{  textDecoration: 'none'}} >
			  <Button variant="contained" color="primary">
				Learn More
			  </Button>
			</Link>
	  </CardActions>
	</Card>
  </Grid>
  )
}

SingleCampaign.propTypes = {}

export default SingleCampaign
