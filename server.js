const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3001;
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/my-first-fintech-pwa', {
  useNewUrlParser: true,
  // useFindAndModify: false
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/api.js"));

mongoose.set('debug', true);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});