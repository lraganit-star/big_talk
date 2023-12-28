const express = require("express");
const app = express();

const myData = require("../questions/big_talk.json");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/data", (req, res) => {
  res.json(myData);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(express.static("../client"));
