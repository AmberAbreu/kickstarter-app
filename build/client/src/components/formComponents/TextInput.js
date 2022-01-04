"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.TextInput = void 0;
var react_1 = __importDefault(require("react"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var react_hook_form_1 = require("react-hook-form");
var TextInput = function (_a) {
    var name = _a.name, control = _a.control, label = _a.label;
    return (react_1["default"].createElement(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var _b = _a.field, onChange = _b.onChange, value = _b.value, error = _a.fieldState.error;
            return (react_1["default"].createElement(TextField_1["default"], { helperText: error ? error.message : null, size: "small", error: !!error, onChange: onChange, value: value, fullWidth: true, label: label, variant: "outlined" }));
        } }));
};
exports.TextInput = TextInput;
//# sourceMappingURL=TextInput.js.map