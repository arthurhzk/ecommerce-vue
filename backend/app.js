const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const router = express.Router();

app.use(cors());

app.use(express.json());
// DB Connection
const conn = require("./db/conn");

conn();
//Router
const routes = require("./routes/router");
app.use("/api", routes);
app.listen(3000, () => {
  console.log("Servidor online!");
});
