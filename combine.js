const hotel = require('./db.json');
const room = require('./dbroom.json');


module.exports = () => ({
  hotel: hotel,
  room: room
  
});