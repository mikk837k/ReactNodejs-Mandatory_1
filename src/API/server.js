const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let aToDoCards = [];

console.log("Server.js here");

app.get("/", (req, res) => {
  return res.send(aToDoCards);
});

app.post("/", (req, res) => {
  const oNewCard = req.body;
  aToDoCards.push(oNewCard);
  return res.send(aToDoCards);
});

app.patch("/:id", (req, res) => {
  const sCardId = req.params.id;

  const card = aToDoCards.find((card) => card.id === parseInt(sCardId));
  card.done = true;

  return res.send(aToDoCards);
});

app.delete("/:id", (req, res) => {
  const sCardId = req.params.id;

  const index = aToDoCards.findIndex((card) => card.id === parseInt(sCardId));

  aToDoCards.splice(index, 1);
  return res.send(aToDoCards);
});

app.listen(process.env.PORT || 8080, (error) => {
  console.log("Server is running");
});
