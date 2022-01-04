"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var core_1 = require("@material-ui/core");
var react_1 = __importDefault(require("react"));
var NavBar_1 = __importDefault(require("./NavBar"));
var useStyles = (0, core_1.makeStyles)({
    page: {
        background: "#f9f9f9",
        width: "100%"
    }
});
function Layout(_a) {
    var children = _a.children;
    var classes = useStyles();
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(NavBar_1["default"], null),
        react_1["default"].createElement("div", { className: classes.page }, children)));
}
exports["default"] = Layout;
//# sourceMappingURL=Layout.js.map