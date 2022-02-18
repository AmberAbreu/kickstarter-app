import { PrismaClient } from "@prisma/client";
import express from "express";
const prisma = new PrismaClient();
require("dotenv").config();
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const cors = require("cors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1KERNLHmzDj3FrL55uyInLvC",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${DOMAIN}/success`,
      cancel_url: `${DOMAIN}/canceled`,
    });
    res.redirect(303, session.url);
  } catch (error) {
    console.log(error);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/build", "index.html"));
});

const port = process.env.PORT || 3001;
app.listen(port, () =>
  console.log("REST API server ready at: http://localhost:3001")
);
