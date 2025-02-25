const stripeAPI = require("../stripe");

async function createCheckoutSession(req, res) {
  console.log("Incoming request body:", req.body); //debug
  const domainUrl = process.env.WEB_APP_URL;
  const { line_items, customer_email } = req.body;

  //checking if one is missing
  if (!line_items || !customer_email) {
    console.log("line items: ", line_items);
    console.log("customer email:", customer_email);
    return res
      .status(400)
      .json({ error: "missing required session parameters" });
  }
  let session;

  try {
    session = await stripeAPI.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      customer_email,
      success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainUrl}/canceled`,
      shipping_address_collection: { allowed_countries: ["US", "EC", "CA"] },
    });
    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ error: "an error ocurred, unable to create session" });
  }
}

module.exports = createCheckoutSession;
