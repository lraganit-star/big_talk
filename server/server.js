const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;
const bigTalkJSON = require("../questions/big_talk.json");

app.use(express.json());
app.use(cors());
app.use(express.static("../client"));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/big_talk", (req, res) => {
  res.json(bigTalkJSON);
  console.log("Data read");
});

app.post("/big_talk", (req, res) => {
  res.send("Data received");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
