"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = __importDefault(require("./components/Layout"));
var Login_1 = __importDefault(require("./components/Login"));
var Campaigns_1 = __importDefault(require("./components/Campaigns"));
var SingleCampaign_1 = __importDefault(require("./components/SingleCampaign"));
var CreateCampaign_1 = __importDefault(require("./components/formComponents/CreateCampaign"));
var Register_1 = __importDefault(require("./components/Register"));
var DonateButton_1 = __importDefault(require("./components/DonateButton"));
var Home_1 = __importDefault(require("./components/Home"));
function App() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(Layout_1["default"], null,
            react_1["default"].createElement(react_router_dom_1.Routes, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Home_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", element: react_1["default"].createElement(Login_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/campaigns", element: react_1["default"].createElement(Campaigns_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/campaigns/:id", element: react_1["default"].createElement(SingleCampaign_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/create", element: react_1["default"].createElement(CreateCampaign_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/signup", element: react_1["default"].createElement(Register_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/donate", element: react_1["default"].createElement(DonateButton_1["default"], null) })))));
}
exports["default"] = App;
//# sourceMappingURL=App.js.map