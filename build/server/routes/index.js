"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var auth = require("./auth");
var users = require("./user");
var campaigns = require("./campaigns");
var stripe = require("./stripe");
var router = express_1["default"].Router();
router.use("/auth", auth);
router.use("/users", users);
router.use("/campaigns", campaigns);
router.use("/stripe", stripe);
module.exports = router;
//# sourceMappingURL=index.js.map