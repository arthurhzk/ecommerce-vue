const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

try {
  app.listen(5000, () => {
    console.log("Server has started on port 5000");
  });
} catch {
  console.log("Server error");
}
