import { PrismaClient } from "@prisma/client";
import express from "express";
const prisma = new PrismaClient();
require("dotenv").config();
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

const route = require("./routes");
app.use("/", route);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log("REST API server ready at: http://localhost:3000")
);
