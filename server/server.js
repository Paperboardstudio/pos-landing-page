const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.get("/", (req, res) => {
  res.send("running");
});

//starting the server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
