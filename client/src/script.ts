const API_ENDPOINT = "http://localhost:3000";

export const stripePaymentMethodHandler = async (data: any, cb: any) => {
  const { amount, result } = data;
  if (result.error) {
    // show error in payment form
    cb(result);
  } else {
    const paymentResponse = await stripePayment({
      payment_method_id: result.paymentMethod.id,
      name: result.paymentMethod.billing_details.name,
      email: result.paymentMethod.billing_details.email,
      amount: amount,
    });
    console.log(paymentResponse);
    cb(paymentResponse);
  }
};

const stripePayment = async (data: any) => {
  const res = await fetch(`${API_ENDPOINT}/pay`, {
    mode: "no-cors",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  console.log("weare un the res", res);
  return await res.json();
};
