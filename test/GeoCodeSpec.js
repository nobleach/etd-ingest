var expect = require('expect.js');
describe('Geocode suite', function() {
  var geoCode;

  beforeEach(function() {
    geoCode = require('../lib/GeoCode.js');
  });

  it("should return an object containing city and state", function(done) {
    geoCode.getLocation(34.711, -98.800, function(result) {
      done();
      // console.log(result);
      expect(result).to.eql({ city: 'Indiahoma', state: 'OK' });
    });
  });

});