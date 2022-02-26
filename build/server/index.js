"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
require("dotenv").config();
var bodyParser = require("body-parser");
var multer = require("multer");
var path = require("path");
var cors = require("cors");
var app = (0, express_1["default"])();
var DOMAIN = "http://localhost:3000" || "https://amber-kickstarter.herokuapp.com/";
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express_1["default"].json());
var route = require("./routes");
app.use(express_1["default"].static(path.resolve(__dirname, "../client/build")));
app.use("/api", route);
app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../../client/build", "index.html"));
});
var port = process.env.PORT || 3001;
app.listen(port, function () {
    return console.log("REST API server ready at: http://localhost:3001");
});
//# sourceMappingURL=index.js.map