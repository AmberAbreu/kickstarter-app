"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
// import { stripePaymentMethodHandler } from "../script";
// import {
//   useStripe,
//   useElements,
//   CardNumberElement,
//   CardExpiryElement,
//   CardCvcElement,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// interface Props {
//   amount?: number;
//   setPaymentCompleted?: any;
// }
// const CARD_ELEMENT_OPTIONS = {
//   style: {
//     base: {
//       lineHeight: "27px",
//       color: "#212529",
//       fontSize: "1.1rem",
//       "::placeholder": {
//         color: "#aab7c4",
//       },
//     },
//     invalid: {
//       color: "#fa755a",
//       iconColor: "#fa755a",
//     },
//   },
// };
function DonateButton() {
    //   amount,
    //   setPaymentCompleted,
    //   const [loading, setLoading] = useState(false);
    //   const [errorMsg, setErrorMsg] = useState("");
    //   const [name, setName] = useState("");
    //   const [email, setEmail] = useState("");
    //   const stripe = useStripe();
    //   const elements = useElements();
    //   const handleSubmit = async (event: any) => {
    //     event.preventDefault();
    //     if (!stripe || !elements) {
    //       return;
    //     }
    //     setLoading(true);
    //     setErrorMsg("");
    //     const paymentMethodObj = {
    //       type: "card",
    //       card: elements.getElement(CardNumberElement),
    //       billing_details: {
    //         name,
    //         email,
    //       },
    //     };
    //     const paymentMethodResult = await stripe.createPaymentMethod(
    //       paymentMethodObj
    //     );
    //     stripePaymentMethodHandler(
    //       {
    //         result: paymentMethodResult,
    //         amount: amount,
    //       },
    //       handleResponse
    //     );
    //   };
    //   const handleResponse = (response: any) => {
    //     setLoading(false);
    //     if (response.error) {
    //       setErrorMsg(
    //         typeof response.error === "string"
    //           ? response.error
    //           : response.error.message
    //       );
    //       return;
    //     }
    //     setPaymentCompleted(response.success ? true : false);
    //   };
    return react_1["default"].createElement(react_1["default"].Fragment, null);
}
exports["default"] = DonateButton;
//# sourceMappingURL=DonateButton.js.map