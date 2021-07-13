const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const users = require("./routes/users");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/shiny-shiny", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to db"))
  .catch(() => console.log("Cannot connect to db"));

app.use(express.json());
app.use(helmet());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});
app.use("/api/users", users);

app.get("/", (req, res) => {
  res.send("It's working");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
