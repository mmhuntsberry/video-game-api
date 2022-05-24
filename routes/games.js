const express = require("express");
const router = express.Router();
const gameControllers = require("../controllers/games");

//GET ALL
router.get("/", gameControllers.list);

//GET BY ID
router.get("/:id", gameControllers.show);

//ADD NEW GAME
router.post("/", gameControllers.create);

//UPDATE GAME BY ID
router.put("/:id", gameControllers.update);

//DELETE AN OBJECT
router.delete("/:id", gameControllers.remove);

module.exports = router;
