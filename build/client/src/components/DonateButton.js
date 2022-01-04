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
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var script_1 = require("../script");
var react_stripe_js_1 = require("@stripe/react-stripe-js");
var CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            lineHeight: "27px",
            color: "#212529",
            fontSize: "1.1rem",
            "::placeholder": {
                color: "#aab7c4"
            }
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
        }
    }
};
function DonateButton(_a) {
    var _this = this;
    var amount = _a.amount, setPaymentCompleted = _a.setPaymentCompleted;
    var _b = (0, react_1.useState)(false), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)(""), errorMsg = _c[0], setErrorMsg = _c[1];
    var _d = (0, react_1.useState)(""), name = _d[0], setName = _d[1];
    var _e = (0, react_1.useState)(""), email = _e[0], setEmail = _e[1];
    var stripe = (0, react_stripe_js_1.useStripe)();
    var elements = (0, react_stripe_js_1.useElements)();
    var handleSubmit = function (event) { return __awaiter(_this, void 0, void 0, function () {
        var paymentMethodObj, paymentMethodResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    if (!stripe || !elements) {
                        return [2 /*return*/];
                    }
                    setLoading(true);
                    setErrorMsg("");
                    paymentMethodObj = {
                        type: "card",
                        card: elements.getElement(react_stripe_js_1.CardNumberElement),
                        billing_details: {
                            name: name,
                            email: email
                        }
                    };
                    return [4 /*yield*/, stripe.createPaymentMethod(paymentMethodObj)];
                case 1:
                    paymentMethodResult = _a.sent();
                    (0, script_1.stripePaymentMethodHandler)({
                        result: paymentMethodResult,
                        amount: amount
                    }, handleResponse);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleResponse = function (response) {
        setLoading(false);
        if (response.error) {
            setErrorMsg(typeof response.error === "string"
                ? response.error
                : response.error.message);
            return;
        }
        setPaymentCompleted(response.success ? true : false);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("h4", { className: "d-flex justify-content-between align-items-center mb-3" },
            react_1["default"].createElement("span", { className: "text-muted" }, "Pay with card")),
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("div", { className: "col-md-6 mb-3" },
                    react_1["default"].createElement("label", { htmlFor: "cc-name" }, "Name on card"),
                    react_1["default"].createElement("input", { id: "cc-name", type: "text", className: "form-control", value: name, onChange: function (e) { return setName(e.target.value); } })),
                react_1["default"].createElement("div", { className: "col-md-6 mb-3" },
                    react_1["default"].createElement("label", { htmlFor: "cc-email" }, "Email"),
                    react_1["default"].createElement("input", { id: "cc-email", type: "text", className: "form-control", value: email, onChange: function (e) { return setEmail(e.target.value); } }))),
            react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("div", { className: "col-md-12 mb-3" },
                    react_1["default"].createElement("label", { htmlFor: "cc-number" }, "Card Number"),
                    react_1["default"].createElement(react_stripe_js_1.CardNumberElement, { id: "cc-number", className: "form-control", options: CARD_ELEMENT_OPTIONS }))),
            react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("div", { className: "col-md-6 mb-3" },
                    react_1["default"].createElement("label", { htmlFor: "expiry" }, "Expiration Date"),
                    react_1["default"].createElement(react_stripe_js_1.CardExpiryElement, { id: "expiry", className: "form-control", options: CARD_ELEMENT_OPTIONS })),
                react_1["default"].createElement("div", { className: "col-md-6 mb-3" },
                    react_1["default"].createElement("label", { htmlFor: "cvc" }, "CVC"),
                    react_1["default"].createElement(react_stripe_js_1.CardCvcElement, { id: "cvc", className: "form-control", options: CARD_ELEMENT_OPTIONS }))),
            react_1["default"].createElement("hr", { className: "mb-4" }),
            react_1["default"].createElement(Button_1["default"], { variant: "contained", type: "submit", disabled: loading }, loading ? (react_1["default"].createElement("div", { className: "spinner-border spinner-border-sm text-light", role: "status" })) : ("PAY \u20B9".concat(amount))),
            errorMsg && react_1["default"].createElement("div", { className: "text-danger mt-2" }, errorMsg))));
}
exports["default"] = DonateButton;
//# sourceMappingURL=DonateButton.js.map