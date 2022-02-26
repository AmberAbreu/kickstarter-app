"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.colortheme = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Recommended_1 = __importDefault(require("../components/Recommended"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var styles_2 = require("@material-ui/core/styles");
exports.colortheme = (0, styles_2.createTheme)({
    palette: {
        primary: { main: "#A4D7C2", contrastText: "#000" },
        secondary: { main: "#3C4A3E", contrastText: "#000" }
    }
});
var useStyles = (0, styles_1.makeStyles)(function () { return ({
    cardAction: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    align: {
        align: "center"
    },
    gridContainer: {
        height: "50vh"
    },
    titleContainer: {
        position: "relative",
        height: 500,
        backgroundColor: "white",
        color: "white",
        padding: "20px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '65px'
    }
}); });
function Home(_a) {
    var _b = (0, react_1.useState)(false), isLoggedIn = _b[0], setIsLoggedIn = _b[1];
    var classes = useStyles();
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(styles_2.ThemeProvider, { theme: exports.colortheme },
            react_1["default"].createElement("div", { className: classes.titleContainer, style: { backgroundImage: "url('assets/startup2.jpg')" } },
                react_1["default"].createElement("div", null),
                react_1["default"].createElement(core_1.Grid, { container: true, className: classes.gridContainer },
                    react_1["default"].createElement(core_1.Grid, { item: true },
                        react_1["default"].createElement(Typography_1["default"], { component: "h2", variant: "h1", align: "left", gutterBottom: true }, "AchievIt"),
                        react_1["default"].createElement(Typography_1["default"], { variant: "h5", align: "left", gutterBottom: true }, "Kickstarter Funding"),
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "create", style: { textDecoration: 'none' } },
                            react_1["default"].createElement(Button_1["default"], { variant: "outlined", color: "primary" }, "Get Started"))))),
            react_1["default"].createElement(Recommended_1["default"], null))));
}
exports["default"] = Home;
//# sourceMappingURL=Home.js.map