const db = require("../data/dbConfig.js");

module.exports = {
  getPlayers,
  addPlayer,
  removePlayer,
  getPlayerById
};

function getPlayers() {
  return db("players");
}

async function addPlayer(player) {
  const [id] = await db("players").insert(player);
  return db("players")
    .where({ id })
    .first();
}
