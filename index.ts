import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// ... your REST API routes will go here
//organize file struct

//USERS:
app.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get(`/api/users/:id`, async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  res.json(user);
});

app.post(`/api/users`, async (req, res) => {
  const result = await prisma.user.create({
    data: { ...req.body },
  });
  res.json(result);
});

app.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.user.update({
    where: { id: Number(id) },
    data: { ...req.body },
  });
  res.json(post);
});

app.delete(`/api/users/:id`, async (req, res) => {
  const { id } = req.params;
  const post = await prisma.user.delete({
    where: { id: Number(id) },
  });
  res.json(post);
});

//CAMPAIGNS

app.get("/api/campaigns", async (req, res) => {
  const campaigns = await prisma.campaign.findMany();
  res.json(campaigns);
});

app.get(`/api/campaigns/:id`, async (req, res) => {
  const { id } = req.params;
  const campaign = await prisma.campaign.findUnique({
    where: { id: Number(id) },
  });
  res.json(campaign);
});

app.post(`/api/campaigns`, async (req, res) => {
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

app.put("/api/campaigns/:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.campaign.update({
    where: { id: Number(id) },
    data: { ...req.body },
  });
  res.json(post);
});

app.delete(`/api/campaigns/:id`, async (req, res) => {
  const { id } = req.params;
  const post = await prisma.campaign.delete({
    where: { id: Number(id) },
  });
  res.json(post);
});

app.listen(3000, () =>
  console.log("REST API server ready at: http://localhost:3000")
);
