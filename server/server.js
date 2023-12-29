const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;
const bigTalkJSON = require("../questions/big_talk.json");
const fallInLoveJSON = require("../questions/fall_in_love.json");

app.use(express.json());
app.use(cors());
app.use(express.static("../client"));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/big_talk", (req, res) => {
  res.json(bigTalkJSON);
  console.log("big talk data read");
});

app.get("/fall_in_love", (req, res) => {
  res.json(fallInLoveJSON);
  console.log("fall in love data read");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
