export {}

const router = require("express").Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const jwt = require("../services/utils/jwt");

router.get(`/`, async (req, res, next) => {
	try {
		const token = req.headers['x-access-token'];
		if (!token.length) {
		res.json("Please submit an appropriate token")
		}else {
			jwt.verifyAccessToken(token)
			res.json("User authenticated")
		}
	} catch (error) {
		next(error);
	}
});

router.post(`/`, async (req, res, next) => {
	try {
		const result = await prisma.user.create({
		data: { ...req.body },
	});
	res.json(result);
	} catch (error) {
		next(error);
	}
});

  router.put("/:id", async (req, res, next) => {
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

module.exports = router;