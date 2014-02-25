var expect = require('chai').expect;
describe("Downloader Suite", function() {
  var downloader;

  beforeEach(function() {
    downloader = require('../lib/Downloader.js');
  });

  it("given a date range it should download a JSON array from URL", function(done) {
    var url = "https://irwint.doi.gov/arcgis/rest/services/Irwin/MapServer/exts/Irwin/GetUpdates?fromDateTime=2014-02-24T12%3A00%3A00Z&toDateTime=2014-02-25T12%3A00%3A00Z&f=pjson";
    downloader.getUpdates(url, function(report) {
      var incidents = JSON.parse(report);
      expect(incidents).to.be.a('object');
      expect(incidents).to.have.property('incidents');
      done();
    })
  });
});
