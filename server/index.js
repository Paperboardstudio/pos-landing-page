const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
// const bodyParser = require("body-parser");
const createCheckoutSession = require("./api/checkout");
const webhook = require("./api/webhook");

const app = express();
const port = 8080;

//middleware
app.use(cors());
app.use(cors({ origin: true }));
app.use(
  express.json({
    verify: (req, res, buffer) => (req["rawBody"] = buffer),
  })
);
// app.use(bodyParser.json());

//Routes
app.get("/", (req, res) => {
  res.send("running");
});
app.post("/create-checkout-session", createCheckoutSession);

app.post("/webhook", webhook);

//starting the server

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
