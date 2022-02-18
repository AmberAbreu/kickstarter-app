import React from 'react'
import PropTypes from 'prop-types'

import axios from "axios";


import Button from "@material-ui/core/Button";


function SingleCampaignDonateButton({id}: any) {
  return (
	<div>
		<form action="/create-checkout-session" method="POST">
      <Button type="submit" color="primary">
        Contribute $10
      </Button>
      </form>
		 
	</div>
  )
}

SingleCampaignDonateButton.propTypes = {}

export default SingleCampaignDonateButton
