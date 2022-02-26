"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
function SingleCampaignDonateButton(_a) {
    var id = _a.id;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("form", { action: "/create-checkout-session", method: "POST" },
            react_1["default"].createElement(Button_1["default"], { type: "submit", color: "primary" }, "Contribute $10"))));
}
SingleCampaignDonateButton.propTypes = {};
exports["default"] = SingleCampaignDonateButton;
//# sourceMappingURL=SingleCampaignDonateButton.js.map