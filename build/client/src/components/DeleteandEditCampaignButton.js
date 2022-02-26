"use strict";
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
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var axios_1 = __importDefault(require("axios"));
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
var DialogContentText_1 = __importDefault(require("@material-ui/core/DialogContentText"));
var DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
var DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var useForm_1 = require("./form/useForm");
function DeleteCampaignButton(_a) {
    var _this = this;
    var id = _a.id, title = _a.title, description = _a.description, photoUrl = _a.photoUrl;
    var initialValues = {
        title: title,
        description: description,
        photoUrl: photoUrl
    };
    var _b = (0, useForm_1.useForm)(initialValues), values = _b.values, setValues = _b.setValues, handleInputChange = _b.handleInputChange;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _c = react_1["default"].useState(false), open = _c[0], setOpen = _c[1];
    var handleClose = function () {
        setOpen(false);
    };
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleSubmit = function () { return __awaiter(_this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].put("/api/campaigns/".concat(id), values)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleDelete = function () { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"]["delete"]("/api/campaigns/".concat(id))];
                case 1:
                    _a.sent();
                    navigate("/");
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Button_1["default"], { variant: "outlined", onClick: handleClickOpen }, "Edit"),
        react_1["default"].createElement(Dialog_1["default"], { open: open, onClose: handleClose },
            react_1["default"].createElement(DialogTitle_1["default"], null, "Subscribe"),
            react_1["default"].createElement(DialogContent_1["default"], null,
                react_1["default"].createElement(DialogContentText_1["default"], null, "To subscribe to this website, please enter your email address here. We will send updates occasionally."),
                react_1["default"].createElement(useForm_1.Form, null,
                    react_1["default"].createElement(TextField_1["default"], { variant: "outlined", label: "title", name: "title", value: values.title, onChange: handleInputChange }),
                    react_1["default"].createElement(TextField_1["default"], { variant: "outlined", label: "description", name: "description", value: values.description, onChange: handleInputChange }),
                    react_1["default"].createElement(TextField_1["default"], { variant: "outlined", name: "photoUrl", label: "photoUrl", value: values.photoUrl, onChange: handleInputChange }),
                    react_1["default"].createElement(Button_1["default"], { type: "submit", variant: "contained", color: "primary", size: "large", onClick: handleSubmit }, "Submit"))),
            react_1["default"].createElement(DialogActions_1["default"], null,
                react_1["default"].createElement(Button_1["default"], { onClick: handleClose }, "Cancel"),
                react_1["default"].createElement(Button_1["default"], { onClick: handleClose }, "Subscribe"))),
        react_1["default"].createElement(Button_1["default"], { onClick: handleDelete }, "Delete")));
}
exports["default"] = DeleteCampaignButton;
//# sourceMappingURL=DeleteandEditCampaignButton.js.map