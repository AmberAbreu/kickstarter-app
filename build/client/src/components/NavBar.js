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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var axios_1 = __importDefault(require("axios"));
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = __importDefault(require("@mui/material/AppBar"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var Menu_1 = __importDefault(require("@mui/material/Menu"));
var Menu_2 = __importDefault(require("@mui/icons-material/Menu"));
var Container_1 = __importDefault(require("@mui/material/Container"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var pages = [{ title: 'Create A Campaign', link: '/create' }, { title: 'Fund A Campaign', link: '/campaigns' }];
var settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
var useStyles = (0, styles_1.makeStyles)(function () { return ({
    link: {
        textDecoration: 'none',
        color: 'white'
    }
}); });
function NavBar(_a) {
    var classes = useStyles();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _b = react_1["default"].useState(null), anchorElNav = _b[0], setAnchorElNav = _b[1];
    var _c = react_1["default"].useState(null), anchorElUser = _c[0], setAnchorElUser = _c[1];
    var _d = (0, react_1.useState)(false), isLoggedIn = _d[0], setIsLoggedIn = _d[1];
    var handleOpenNavMenu = function (event) {
        setAnchorElNav(event.currentTarget);
    };
    var handleOpenUserMenu = function (event) {
        setAnchorElUser(event.currentTarget);
    };
    var handleCloseNavMenu = function () {
        setAnchorElNav(null);
    };
    var handleCloseUserMenu = function () {
        setAnchorElUser(null);
    };
    function handleSignOut() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    window.localStorage.removeItem('token');
                    window.localStorage.removeItem('user');
                    navigate("/login");
                }
                catch (error) {
                    console.log("logout failed");
                }
                return [2 /*return*/];
            });
        });
    }
    (0, react_1.useEffect)(function () {
        try {
            axios_1["default"].get('/api/users', {
                headers: {
                    "x-access-token": localStorage.getItem("token") || ''
                }
            })
                .then(function (response) {
                if (response.data === 'User authenticated') {
                    console.log(response.data);
                    setIsLoggedIn(true);
                }
            });
            console.log(isLoggedIn);
        }
        catch (error) {
            console.log(error);
        }
    }, [isLoggedIn]);
    return (react_1["default"].createElement(AppBar_1["default"], { style: { backgroundColor: "#A4D7C2" } },
        react_1["default"].createElement(Container_1["default"], { maxWidth: "xl" },
            react_1["default"].createElement(Toolbar_1["default"], { disableGutters: true },
                react_1["default"].createElement(Typography_1["default"], { variant: "h6", noWrap: true, component: "div", sx: { mr: 2, display: { xs: 'none', md: 'flex' } } },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: '/', className: classes.link }, "AchievIt")),
                react_1["default"].createElement(Box_1["default"], { sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' } } },
                    react_1["default"].createElement(IconButton_1["default"], { size: "large", "aria-label": "account of current user", "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: handleOpenNavMenu, color: "inherit" },
                        react_1["default"].createElement(Menu_2["default"], null)),
                    react_1["default"].createElement(Menu_1["default"], { id: "menu-appbar", anchorEl: anchorElNav, anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left'
                        }, keepMounted: true, transformOrigin: {
                            vertical: 'top',
                            horizontal: 'left'
                        }, open: Boolean(anchorElNav), onClose: handleCloseNavMenu, sx: {
                            display: { xs: 'block', md: 'none' }
                        } }, pages.map(function (page) { return (react_1["default"].createElement(MenuItem_1["default"], { key: page.title, onClick: handleCloseNavMenu },
                        react_1["default"].createElement(Typography_1["default"], { textAlign: "center" }, page.title))); }))),
                react_1["default"].createElement(Typography_1["default"], { variant: "h6", noWrap: true, component: "div", sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }, "KICKSTARTER APP"),
                react_1["default"].createElement(Box_1["default"], { sx: { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }, pages.map(function (page) { return (react_1["default"].createElement(Button_1["default"], { key: page.title, onClick: handleCloseNavMenu, sx: { my: 2, color: 'white', display: 'block' } },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: page.link, className: classes.link }, page.title))); })),
                react_1["default"].createElement(Box_1["default"], null, isLoggedIn ?
                    (react_1["default"].createElement(react_router_dom_1.Link, { to: "/", style: { textDecoration: 'none' } },
                        react_1["default"].createElement(Typography_1["default"], { className: classes.link, onClick: handleSignOut }, "Sign Out")))
                    :
                        (react_1["default"].createElement(react_router_dom_1.Link, { to: "/login", style: { textDecoration: 'none' } },
                            react_1["default"].createElement(Typography_1["default"], { className: classes.link }, "Log In"))))))));
}
exports["default"] = NavBar;
//# sourceMappingURL=NavBar.js.map