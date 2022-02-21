import express from "express";

const auth = require("./auth");
const users = require("./user")
const campaigns = require("./campaigns")
const stripe = require("./stripe")

const router = express.Router();

router.use("/auth", auth);
router.use("/users", users)
router.use("/campaigns", campaigns)
router.use("/stripe", stripe)

module.exports = router;
