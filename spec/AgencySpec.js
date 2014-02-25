var expect = require('expect.js');
describe('Agency spec', function() {
  var agency;

  beforeEach(function() {
    agency = require('../lib/Agency.js');
  });

  it("should take a an incident_id and return a valid forest name", function() {
    agency.getForestName("NM-GNF-000230", function(result) {
      expect(result.forest).to.eql("Gila National Forest");
    });
  });

});