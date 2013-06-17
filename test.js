var randomColor = require("./"),
    reRGB       = /^rgb\((\d+),\s?(\d+),\s?(\d+)\)$/;

it('returns a random color', function(){

  var a = randomColor(),
      b = randomColor(),
      c = randomColor();

  expect(a).to.not.equal(b);
  expect(b).to.not.equal(c);

  expect(a).to.match(reRGB);
  expect(b).to.match(reRGB);
  expect(c).to.match(reRGB);

  expect(verify(a)).to.be.true;
  expect(verify(b)).to.be.true;
  expect(verify(c)).to.be.true;

});

it('allows specifying a cap number', function(){

  var a = randomColor(25),
      b = randomColor(25),
      c = randomColor(25);

  expect(verify(a), 25).to.be.true;
  expect(verify(b), 25).to.be.true;
  expect(verify(c), 25).to.be.true;

});


function verify(rgb, cap){
  cap || ( cap = 255 );

  return rgb.match(/^rgb\((\d+),\s?(\d+),\s?(\d+)\)$/).slice(1).map(Number).every(function(n){
    return n < 256 && n > -1;
  });
}
