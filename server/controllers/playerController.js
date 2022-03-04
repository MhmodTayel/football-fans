const Player = require("../models/player");
const faker = require("faker");



async function generatePlayerType(num, state, country, team) {
  for (let idx = 0; idx < num; idx++) {
    await createPlayer(state, country, team);
  }
}

async function createPlayer(state, country, team) {
  const player = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    value: getRandomValue(1000000, 3000000),
    state,
    country,
    team,
  };
  return Player.create(player);
}


function getRandomValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


module.exports = {generatePlayerType}