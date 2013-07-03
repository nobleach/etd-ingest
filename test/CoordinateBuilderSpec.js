var expect = require('expect.js');
describe("Coordinate Builder Suite", function() {
  var coordinateBuilder;
  var validId;

  beforeEach(function() {
    coordinateBuilder = require('../lib/CoordinateBuilder.js');
  });

  it("should round a coordinate to 3 significant figures", function() {
    expect(coordinateBuilder.roundAndPadFloat(32.8885)).to.be('32.889');
  });

  it("should handle negative numbers", function() {
    expect(coordinateBuilder.roundAndPadFloat(-107.809722)).to.be('-107.810');
  });

  it("should handle numbers with no decimals at all", function() {
    expect(coordinateBuilder.roundAndPadFloat(32)).to.be('32.000');
  });

});
