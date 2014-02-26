var expect = require('chai').expect;
var sinon = require('sinon');

describe("Downloader Suite", function() {
  var url, downloader;

  beforeEach(function(done){
    downloader = require('../lib/Downloader.js');
    url = "https://irwint.doi.gov/arcgis/rest/services/Irwin/MapServer/exts/Irwin/GetUpdates?fromDateTime=2014-02-24T12%3A00%3A00Z&toDateTime=2014-02-25T12%3A00%3A00Z&f=pjson";
    sinon
      .stub(downloader, 'getUpdates')
      .yields(JSON.stringify( {incidents: []} ));
    done();
  });

  afterEach(function(done){
    downloader.getUpdates.restore();
    done();
  });  

  it("should download a JSON object from URL", function(done) {
    downloader.getUpdates(url, function(report) {
      var incidents = JSON.parse(report);
      expect(downloader.getUpdates.called).to.equal(true);
      expect(report).to.not.be.empty;
      done();
    })
  });

  it('should have a key named "incidents"', function(done) {
    downloader.getUpdates(url, function(report) {
      var incidents = JSON.parse(report);
      expect(incidents).to.be.a('object');
      expect(incidents).to.have.property('incidents');
      done();
    });
  });
});
