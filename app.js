const express = require("express");
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  console.log("asdasd");
  res.send("siz get metodan foydalandingiz");
});

app.listen(PORT, "127.0.0.1");
