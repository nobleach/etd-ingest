var expect = require('expect.js');
describe('GetIncident Suite', function() {
  var getIncident;

  beforeEach(function() {
    getIncident = require('../lib/GetIncident.js');
  });

  it("should take a incident_name, event_id and return true if incident exists", function(done) {
    getIncident.incidentExists("Grand Bay", "FL3035908459920120212", function(result) {
      done();
      expect(result).to.be(true);
    });
  });

});