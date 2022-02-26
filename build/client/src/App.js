"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
require("@stripe/stripe-js");
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = __importDefault(require("./components/Layout"));
var Login_1 = __importDefault(require("./pages/Login"));
var Campaigns_1 = __importDefault(require("./pages/Campaigns"));
var SingleCampaignDetails_1 = __importDefault(require("./pages/SingleCampaignDetails"));
var CreateCampaign_1 = __importDefault(require("./pages/CreateCampaign"));
var Register_1 = __importDefault(require("./pages/Register"));
var Success_1 = __importDefault(require("./pages/Success"));
var Canceled_1 = __importDefault(require("./pages/Canceled"));
var Home_1 = __importDefault(require("./pages/Home"));
function App() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(Layout_1["default"], null,
            react_1["default"].createElement(react_router_dom_1.Routes, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Home_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", element: react_1["default"].createElement(Login_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/campaigns", element: react_1["default"].createElement(Campaigns_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/campaigns/:id", element: react_1["default"].createElement(SingleCampaignDetails_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/create", element: react_1["default"].createElement(CreateCampaign_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/signup", element: react_1["default"].createElement(Register_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/success", element: react_1["default"].createElement(Success_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/canceled", element: react_1["default"].createElement(Canceled_1["default"], null) })))));
}
exports["default"] = App;
//# sourceMappingURL=App.js.map