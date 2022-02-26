"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
exports.Form = exports.useForm = void 0;
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
function useForm(initialValues) {
    //work around :(
    var _a = (0, react_1.useState)(initialValues), values = _a[0], setValues = _a[1];
    var handleInputChange = function (e) {
        var _a;
        var _b = e.target, name = _b.name, value = _b.value;
        setValues(__assign(__assign({}, values), (_a = {}, _a[name] = value, _a)));
    };
    return {
        values: values,
        setValues: setValues,
        handleInputChange: handleInputChange
    };
}
exports.useForm = useForm;
var useStyles = (0, core_1.makeStyles)(function (theme) { return ({
    root: {
        "& .MuiFormControl-root": {
            width: "50%",
            margin: "10px"
        }
    }
}); });
function Form(_a) {
    var className = _a.className, children = _a.children;
    var classes = useStyles();
    return react_1["default"].createElement("form", { className: classes.root }, children);
}
exports.Form = Form;
//# sourceMappingURL=useForm.js.map