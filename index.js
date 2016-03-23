var random = require("rnd");

module.exports = color;

function color (max, min) {
  max || (max = 255);
  min || (min = 0);
  if (max > 255 || max < 0) max = 255;
  if (min >= max || min < 0) min = 0;
  return 'rgb(' + random(max, min) + ', ' + random(max, min) + ', ' + random(max, min) + ')';
}
