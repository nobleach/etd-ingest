var expect = require('expect.js');
describe("Coordinate Builder Suite", function() {
  var coordinateBuilder;
  var validId;

  beforeEach(function() {
    coordinateBuilder = require('../lib/CoordinateBuilder.js');
  });

  it("should truncate any coordinate to 3 significant figures", function() {
    expect(coordinateBuilder.truncateFloat(32.888889)).to.be(32.888);
    expect(coordinateBuilder.truncateFloat(-107.809722)).to.be(-107.809);
  });

});
