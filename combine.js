const room = require('./data/dbroom.json');
const hotel = require('./data/db.json');
const account = require('./data/dbaccount.json');
const bookingroom = require("./data/bookingroom.json");


module.exports = () => ({
  hotel: hotel,
  room: room,
  account:account,
  bookingroom:bookingroom
});