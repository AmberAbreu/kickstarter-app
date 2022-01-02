import { PrismaClient } from "@prisma/client";
import express from "express";

const auth = require("./auth");
const createError = require("http-errors");
const prisma = new PrismaClient();
const router = express.Router();

router.use("/auth", auth);

router.get(`/users/:id`, async (req, res) => {
  console.log(req.headers);
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
    include: {
      campaigns: true,
    },
  });
  res.json(user);
});

// router.post(`/users`, async (req, res) => {
//   const result = await prisma.user.create({
//     data: { ...req.body },
//   });
//   res.json(result);
// });

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.user.update({
    where: { id: Number(id) },
    data: { ...req.body },
  });
  res.json(post);
});

//CAMPAIGNS

router.get("/campaigns", async (req, res) => {
  const campaigns = await prisma.campaign.findMany();
  res.json(campaigns);
});

router.get(`/campaigns/:id`, async (req, res) => {
  const { id } = req.params;
  const campaign = await prisma.campaign.findUnique({
    where: { id: Number(id) },
  });
  res.json(campaign);
});

router.post(`/campaigns`, async (req, res) => {
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

router.put("/campaigns/:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.campaign.update({
    where: { id: Number(id) },
    data: { ...req.body },
  });
  res.json(post);
});

router.delete(`/campaigns/:id`, async (req, res) => {
  const { id } = req.params;
  const post = await prisma.campaign.delete({
    where: { id: Number(id) },
  });
  res.json(post);
});

// router.use(async (req, res, next) => {
//   next(createError.NotFound("Route not Found"));
// });

module.exports = router;
