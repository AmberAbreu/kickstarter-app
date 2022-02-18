import React from 'react'
import { useNavigate, Navigate } from "react-router-dom";

import axios from "axios";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useForm, Form } from "../components/form/useForm";
import { CampaignI } from '../pages/Campaigns';

export default function DeleteCampaignButton({id, title, description, photoUrl}: CampaignI) {
	const initialValues = {
		title: title,
		description: description,
		photoUrl: photoUrl,
	  };

	const { values, setValues, handleInputChange } = useForm(initialValues);

	const navigate = useNavigate();

	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickOpen = () => {
		setOpen(true);
	  };
	

	const handleSubmit = async () => {
		try {
		  await axios.put(`/api/campaigns/${id}`, values);
		} catch (err) {
		  console.log(err);
		}
	  };

	const handleDelete = async () => {
		try {
		  await axios.delete(`/api/campaigns/${id}`);
		  navigate("/");
		} catch (error) {
		  console.log(error);
		}
	  };
  return (
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
			<Button onClick={handleDelete}>Delete</Button>
	  </>
	
  )
}
