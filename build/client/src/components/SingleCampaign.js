"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var react_router_dom_1 = require("react-router-dom");
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var CardActionArea_1 = __importDefault(require("@material-ui/core/CardActionArea"));
var CardActions_1 = __importDefault(require("@material-ui/core/CardActions"));
var CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
var CardMedia_1 = __importDefault(require("@material-ui/core/CardMedia"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = (0, styles_1.makeStyles)(function () { return ({
    cardAction: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px"
    }
}); });
function SingleCampaign(_a) {
    var id = _a.id, title = _a.title, description = _a.description, photoUrl = _a.photoUrl, isHomePage = _a.isHomePage;
    var classes = useStyles();
    return (react_1["default"].createElement(core_1.Grid, { item: true },
        react_1["default"].createElement(Card_1["default"], { key: id, style: {
                width: 400,
                height: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            } },
            react_1["default"].createElement(CardMedia_1["default"], { component: "img", alt: "Campaign Image", height: "200", image: photoUrl, title: title }),
            react_1["default"].createElement(CardContent_1["default"], null,
                react_1["default"].createElement(Typography_1["default"], { gutterBottom: true, variant: "h6", component: "h3" }, title),
                react_1["default"].createElement(Typography_1["default"], { variant: "body2", component: "p" }, description)),
            react_1["default"].createElement(CardActionArea_1["default"], { className: classes.cardAction },
                react_1["default"].createElement(CardActions_1["default"], null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/campaigns/".concat(id), style: { textDecoration: 'none' } },
                        react_1["default"].createElement(Button_1["default"], { size: "small", color: "primary", variant: "contained", style: { color: "#FFFFFF" } }, "See More")))))));
}
SingleCampaign.propTypes = {};
exports["default"] = SingleCampaign;
//# sourceMappingURL=SingleCampaign.js.map