export {}

const router = require("express").Router();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const DOMAIN =
  "http://localhost:3000" || "https://amber-kickstarter.herokuapp.com/";

router.post("/create-checkout-session", async (req, res) => {
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

  module.exports = router;