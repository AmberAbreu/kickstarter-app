import express from "express";
require("dotenv").config();
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const cors = require("cors");

const app = express();

const DOMAIN =
  "http://localhost:3000" || "https://amber-kickstarter.herokuapp.com/";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

const route = require("./routes");

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/api", route);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/build", "index.html"));
});

const port = process.env.PORT || 3001;
app.listen(port, () =>
  console.log("REST API server ready at: http://localhost:3001")
);
