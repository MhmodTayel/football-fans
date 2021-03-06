require("dotenv").config();
const express = require("express");
var cors = require("cors");
const Route = require('./routes/route')
const mongoose = require("mongoose");
const userAuth = require('./middlewares/middleware')
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.CONNECTION_STRING);

app.use(userAuth)
app.use('/users',Route)

app.use("*", (req, res) => {
  res.status(404).end();
});

app.use((err, req, res, next) => {
  res.status(403).json(err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Connection Started on port ${PORT}`);
});
