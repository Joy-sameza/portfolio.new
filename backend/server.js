require("dotenv").config();
const port = parseInt(process.env.PORT) || 8080;

const express = require("express");
const app = express();
const { connect } = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const reviewRouter = require("./routes/reviewRoute");

//Middle wares
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/msg", reviewRouter);

// Connect to the database then listen for requests on PORT
connect(process.env.MONGODB_URI)
  .then(() =>
    app.listen(port, () => console.log(`Listening for request on port ${port}`))
  )
  .catch((err) => console.error(`error listening on port ${port}\n`, err));
