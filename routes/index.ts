import { PrismaClient } from "@prisma/client";
import express from "express";

const auth = require("./auth");
const createError = require("http-errors");
const prisma = new PrismaClient();
const router = express.Router();

router.use("/auth", auth);

router.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

router.get(`/api/users/:id`, async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  res.json(user);
});

router.post(`/api/users`, async (req, res) => {
  const result = await prisma.user.create({
    data: { ...req.body },
  });
  res.json(result);
});

router.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.user.update({
    where: { id: Number(id) },
    data: { ...req.body },
  });
  res.json(post);
});

router.delete(`/api/users/:id`, async (req, res) => {
  const { id } = req.params;
  const post = await prisma.user.delete({
    where: { id: Number(id) },
  });
  res.json(post);
});

//CAMPAIGNS

router.get("/api/campaigns", async (req, res) => {
  const campaigns = await prisma.campaign.findMany();
  res.json(campaigns);
});

router.get(`/api/campaigns/:id`, async (req, res) => {
  const { id } = req.params;
  const campaign = await prisma.campaign.findUnique({
    where: { id: Number(id) },
  });
  res.json(campaign);
});

router.post(`/api/campaigns`, async (req, res) => {
  const { title, description, authorEmail } = req.body;
  const result = await prisma.campaign.create({
    data: {
      title,
      description,
      status: false,
      owner: { connect: { email: authorEmail } },
    },
  });
  res.json(result);
});

router.put("/api/campaigns/:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.campaign.update({
    where: { id: Number(id) },
    data: { ...req.body },
  });
  res.json(post);
});

router.delete(`/api/campaigns/:id`, async (req, res) => {
  const { id } = req.params;
  const post = await prisma.campaign.delete({
    where: { id: Number(id) },
  });
  res.json(post);
});

router.use(async (req, res, next) => {
  next(createError.NotFound("Route not Found"));
});

module.exports = router;
