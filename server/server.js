const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;
const myData = require("../questions/big_talk.json");

app.use(express.json());
app.use(cors());
app.use(express.static("../client"));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/data", (req, res) => {
  res.json(myData);
  console.log("Data read");
});

app.post("/data", (req, res) => {
  res.send("Data received");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
