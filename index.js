const express = require("express");
const app = express();
const gamesRouter = require("./routes/games");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/games", gamesRouter);

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
