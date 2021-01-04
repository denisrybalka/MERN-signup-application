const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();

const PORT = 4000;

mongoose.connect(
  process.env.DATABASE_ACCESS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Database connected")
);

app.use(express.json()); // body-parser
app.use(cors());
app.use("/", routesUrls);
app.listen(PORT, () => console.log("Server is running..."));
