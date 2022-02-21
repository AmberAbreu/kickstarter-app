export {}

const router = require("express").Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


router.get("/", async (req, res, next) => {
	try {
	  const campaigns = await prisma.campaign.findMany();
	  res.json(campaigns);
	} catch (error) {
	  next(error);
	}
  });
  
  router.get(`/:id`, async (req, res, next) => {
	try {
	  const { id } = req.params;
	  const campaign = await prisma.campaign.findUnique({
		where: { id: Number(id) },
	  });
	  res.json(campaign);
	} catch (error) {
	  next(error);
	}
  });
  
  router.post(`/`, async (req, res, next) => {
	try {
	  const { title, description, photoUrl, ownerEmail } = req.body;
  
	  const result = await prisma.campaign.create({
		data: {
		  title,
		  description,
		  photoUrl,
		  status: true,
		  owner: { connect: { email: ownerEmail } },
		},
	  });
	  res.json(result);
	} catch (error) {
	  next(error);
	}
  });
  
  router.put("/:id", async (req, res, next) => {
	try {
	  const { id } = req.params;
	  const post = await prisma.campaign.update({
		where: { id: Number(id) },
		data: { ...req.body },
	  });
	  res.json(post);
	} catch (error) {
	  next(error);
	}
  });
  
  router.delete(`/:id`, async (req, res, next) => {
	try {
	  const { id } = req.params;
	  const post = await prisma.campaign.delete({
		where: { id: Number(id) },
	  });
	  res.json(post);
	} catch (error) {
	  next(error);
	}
  });

  module.exports = router;