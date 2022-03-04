const Team = require("../models/team");
const Player = require("../models/player");
const { generatePlayerType } = require("./playerController");

async function generateTeam(country, name) {
  const team = {
    country,
    name: `${name} Team`,
  };
  const { _id: id, country: countryName } = await Team.create(team);
  await generatePlayerType(3, "goalkeepers", countryName, id);
  await generatePlayerType(6, "defenders", countryName, id);
  await generatePlayerType(6, "midfielders", countryName, id);
  await generatePlayerType(5, "attackers", countryName, id);

  const players = await Player.find({ team: id }, { value: 1, _id: 0 });
  const value = players.reduce((a, b) => ({ value: a.value + b.value }));
  await Team.updateOne({ _id:id }, value);
  
  return id
}

module.exports = { generateTeam };
