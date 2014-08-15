var test = require('prova');
var test = require('prova');
var randomColor = require("./");
var reRGB = /^rgb\((\d+),\s?(\d+),\s?(\d+)\)$/;

test('returns a random color', function (t) {
  t.plan(8);

  var a = randomColor(),
      b = randomColor(),
      c = randomColor();

  t.notEqual(a, b);
  t.notEqual(b, c);

  t.ok(reRGB.test(a));
  t.ok(reRGB.test(b));
  t.ok(reRGB.test(c));

  t.ok(verify(a));
  t.ok(verify(b));
  t.ok(verify(c));

});

test('allows specifying a max number', function (t) {
  t.plan(3);

  var a = randomColor(25),
      b = randomColor(25),
      c = randomColor(25);

  t.ok(verify(a, 25));
  t.ok(verify(b, 25));
  t.ok(verify(c, 25));
});

test('allows specifying min number', function (t) {
  t.plan(6);

  var a = randomColor(25, 20);
  var b = randomColor(25, 20);
  var c = randomColor(25, 20);
  var d = randomColor(25, 20);
  var e = randomColor(25, 20);
  var f = randomColor(25, 20);

  t.ok(verify(a, 25, 20));
  t.ok(verify(b, 25, 20));
  t.ok(verify(c, 25, 20));
  t.ok(verify(d, 25, 20));
  t.ok(verify(e, 25, 20));
  t.ok(verify(f, 25, 20));
});


function verify(rgb, max, min){
  max || ( max = 255 );
  min || ( min = 0 );

  return rgb.match(/^rgb\((\d+),\s?(\d+),\s?(\d+)\)$/).slice(1).map(Number).every(function(n){
    return n <= max && n >= min;
  });
}
