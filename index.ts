import { PrismaClient } from "@prisma/client";
import express from "express";
const prisma = new PrismaClient();
require("dotenv").config();
const bodyParser = require("body-parser");
const multer = require("multer");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

const route = require("./routes");
app.use("/api", route);

app.post("/pay", async (request, response) => {
  try {
    // Create the PaymentIntent
    let intent = await stripe.paymentIntents.create({
      payment_method: request.body.payment_method_id,
      description: "Test payment",
      amount: request.body.amount * 100,
      currency: "inr",
      confirmation_method: "manual",
      confirm: true,
    });
    // Send the response to the client
    response.send(generateResponse(intent));
  } catch (e) {
    // Display error on client
    return response.send({ error: e.message });
  }
});

const generateResponse = (intent) => {
  if (intent.status === "succeeded") {
    // The payment didn’t need any additional actions and completed!
    // Handle post-payment fulfillment
    return {
      success: true,
    };
  } else {
    // Invalid status
    return {
      error: "Invalid PaymentIntent status",
    };
  }
};

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log("REST API server ready at: http://localhost:3000")
);
