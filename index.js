const express = require("express");
const app = express();
const nanoid = require("nanoid");

app.use(express.json());

const data = require("./data/index");

const PORT = process.env.PORT || 5000;

//GET ALL
app.get("/data", (req, res) => {
  res.json(data.games);
});

//GET BY ID
app.get("/games/:id", (req, res) => {
  const { id } = req.params;
  const foundGame = data.games.find((game) => game.id === Number(id));
  res.json(foundGame);
});

//ADD NEW GAME
app.post("/games", (req, res) => {
  data.games.push({ id: nanoid.nanoid(), ...req.body });
  res.json(data.games);
});

//UPDATE GAME BY ID
app.put("/games/:id", (req, res) => {
  const { id } = req.params;

  const foundGame = data.games.find((game) => game.id === Number(id));
  console.log(foundGame);

  const foundGameIndex = data.games.findIndex((game) => game.id === Number(id));
  console.log(foundGameIndex);

  let updatedGame = {
    ...foundGame,
    ...req.body,
  };

  //SWAP OBJECT FOR UPDATED OBJECT
  data.games.splice(foundGameIndex, 1, updatedGame);
  res.json(data.games(updatedGame));
});

//DELETE AN OBJECT
app.delete("/games/:id", (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;

  const filteredGames = data.games.filter((game) => game.id !== Number(id));
  console.log(foundGame);

  res.json(filteredGames);
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
