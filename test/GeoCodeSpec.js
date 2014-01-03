var expect = require('expect.js');
describe('Geocode suite', function() {
  var geoCode;

  beforeEach(function() {
    geoCode = require('../lib/GeoCode.js');
  });

  it("should take a lat/lng and return an object containing path/row and state abbreviation", function(done) {
    geoCode.getPathRowState(38.003, -114.010, function(result) {
      done();
      expect(result).to.eql({ path: 39, row: 34, state_abbr: 'UT'});
    });
  });

});