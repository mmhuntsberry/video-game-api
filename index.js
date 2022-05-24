const express = require("express");
const app = express();
const gamesRouter = require("./routes/games");

app.use(express.json());
app.use("/games", gamesRouter);

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
