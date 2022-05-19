const express = require("express");
const app = express();
const nanoid = require("nanoid");
const pool = require("./sql/connection");

app.use(express.json());

const PORT = process.env.PORT || 8888;

//GET ALL
app.get("/games", (req, res) => {
  pool.query(`SELECT * FROM games`, function (err, games, fields) {
    res.json(games);
  });
});

//GET BY ID
app.get("/games/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    `SELECT * FROM games WHERE id = ?`,
    [id],
    function (err, game, fields) {
      res.json(game);
    }
  );
});

//ADD NEW GAME
app.post("/games", (req, res) => {
  pool.query(
    "INSERT INTO games (id, title, release_year, box_art, description, trailer, hero, developer) VALUES (?,?,?,?,?,?,?,?)",
    [
      null,
      req.body.title,
      req.body.release_year,
      req.body.box_art,
      req.body.description,
      req.body.trailer,
      req.body.hero,
      req.body.developer,
    ],
    function (err, game, fields) {
      if (err) console.log({ err: err });
      res.json(game);
    }
  );
});

//UPDATE GAME BY ID
app.put("/games/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    "UPDATE games SET ? WHERE id = ?",
    [req.body, id],
    function (err, game, fields) {
      if (err) console.log({ err: err });
      res.json(game);
    }
  );
});

//DELETE AN OBJECT
app.delete("/games/:id", (req, res) => {
  const { id } = req.params;

  pool.query(
    "DELETE FROM games WHERE id = ?",
    [id],
    function (err, game, fields) {
      if (err) console.log({ err: err });
      res.json(game);
    }
  );
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
