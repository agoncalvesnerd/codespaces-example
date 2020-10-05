const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("Hello World");
});

app.listen(process.env.PORT, () => console.log("App Started"));
