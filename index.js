var random = require("rnd");

module.exports = color;

function color (max, min) {
  max || (max = 255);
  return 'rgb(' + random(max, min) + ', ' + random(max, min) + ', ' + random(max, min) + ')';
}
