const hotel = require('./data/db.json');
const room = require('./data/dbroom.json');
const account = require('./data/dbaccount.json');


module.exports = () => ({
  hotel: hotel,
  room: room,
  account:account
});