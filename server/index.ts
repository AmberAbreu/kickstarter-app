import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// ... your REST API routes will go here
//organize file struct

//USERS:
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get(`/users/:id`, async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  res.json(user);
});

app.post(`/users`, async (req, res) => {
  const result = await prisma.user.create({
    data: { ...req.body },
  });
  res.json(result);
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.user.update({
    where: { id: Number(id) },
    data: { ...req.body },
  });
  res.json(post);
});

app.delete(`/users/:id`, async (req, res) => {
  const { id } = req.params;
  const post = await prisma.user.delete({
    where: { id: Number(id) },
  });
  res.json(post);
});

//CAMPAIGNS

app.get("/campaigns", async (req, res) => {
  const users = await prisma.campaign.findMany();
  res.json(users);
});

app.get(`/campaigns/:id`, async (req, res) => {
  const { id } = req.params;
  const user = await prisma.campaign.findUnique({
    where: { id: Number(id) },
  });
  res.json(user);
});

app.post(`/campaigns`, async (req, res) => {
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

app.put("/campaigns/:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.campaign.update({
    where: { id: Number(id) },
    data: { ...req.body },
  });
  res.json(post);
});

app.delete(`/campaigns/:id`, async (req, res) => {
  const { id } = req.params;
  const post = await prisma.campaign.delete({
    where: { id: Number(id) },
  });
  res.json(post);
});

app.listen(3000, () =>
  console.log("REST API server ready at: http://localhost:3000")
);
