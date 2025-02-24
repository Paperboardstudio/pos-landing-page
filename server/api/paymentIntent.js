const stripeApi = require("../stripe");

function calculateOrderAmount(cartItems) {
  return (
    cartItems.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0) * 100
  ); //since this is for various products Ill have
  // to go back at some point to make it work only for 1 subscription
  // to avoid having the customer paying multiple subscriptions
}
async function paymentIntent(req, res) {
  const { cartItems, description, receipt_email, shipping } = req.body;

  try {
    paymentIntent = await stripeAPI.paymentIntents.create({
      amount: calculateOrderAmount(cartItems),
      currency: "usd",
      description,
      payment_method_types: ["card"],
      receipt_email,
      shipping,
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ error: "an error ocurred, unable to create payment intent" });
  }
}

module.exports = paymentIntent;
