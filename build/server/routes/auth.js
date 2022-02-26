"use strict";
exports.__esModule = true;
var router = require("express").Router();
var user = require("../controllers/auth.controller");
var auth = require("../middlewares/auth");
// register
router.post("/", user.register);
// login
router.post("/login", user.login);
// all users
router.get("/", auth, user.all);
module.exports = router;
//# sourceMappingURL=auth.js.map