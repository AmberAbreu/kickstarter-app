import { PrismaClient } from "@prisma/client";
import express from "express";

const auth = require("./auth");
const admin = require("../config/firebase-config");
const { checkIfAuthenticated } = require("../middlewares/auth");
const createError = require("http-errors");
const prisma = new PrismaClient();
const router = express.Router();

const jwt = require("../utils/jwt");

router.use("/auth", auth);

router.get(`/users/`, async (req, res, next) => {
  try {
    const { id, email, accessToken } = JSON.parse(req.headers.authorization!);
    if (jwt.verifyAccessToken(accessToken)) {
      const userCampaigns = await prisma.user.findUnique({
        where: { email },
        include: {
          campaigns: true,
        },
      });
      res.json(userCampaigns);
    }
  } catch (error) {
    next(error);
  }
});

router.post(`/users`, async (req, res, next) => {
  try {
    const result = await prisma.user.create({
      data: { ...req.body },
    });
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.put("/users/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await prisma.user.update({
      where: { id: Number(id) },
      data: { ...req.body },
    });
    res.json(post);
  } catch (error) {
    next(error);
  }
});

//CAMPAIGNS

router.get("/campaigns", async (req, res, next) => {
  try {
    const campaigns = await prisma.campaign.findMany();
    res.json(campaigns);
  } catch (error) {
    next(error);
  }
});

router.get(`/campaigns/:id`, async (req, res, next) => {
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

router.post(`/campaigns`, async (req, res, next) => {
  try {
    const { title, description, ownerId } = req.body;
    const result = await prisma.campaign.create({
      data: {
        title,
        description,
        status: true,
        owner: { connect: { id: ownerId } },
      },
    });
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.put("/campaigns/:id", async (req, res, next) => {
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

router.delete(`/campaigns/:id`, async (req, res, next) => {
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

// router.use(async (req, res, next) => {
//   next(createError.NotFound("Route not Found"));
// });

module.exports = router;
