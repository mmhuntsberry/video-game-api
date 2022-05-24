const pool = require("../sql/connection");

const list = (req, res) => {
  pool.query(`SELECT * FROM games`, function (err, games, fields) {
    res.json(games);
  });
};

const show = (req, res) => {
  const { id } = req.params;
  pool.query(
    `SELECT * FROM games WHERE id = ?`,
    [id],
    function (err, game, fields) {
      res.json(game);
    }
  );
};

const create = (req, res) => {
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
};

const update = (req, res) => {
  const { id } = req.params;
  pool.query(
    "UPDATE games SET ? WHERE id = ?",
    [req.body, id],
    function (err, game, fields) {
      if (err) console.log({ err: err });
      res.json(game);
    }
  );
};

const remove = (req, res) => {
  const { id } = req.params;

  pool.query(
    "DELETE FROM games WHERE id = ?",
    [id],
    function (err, game, fields) {
      if (err) console.log({ err: err });
      res.json(game);
    }
  );
};

module.exports = {
  list,
  show,
  create,
  update,
  remove,
};
