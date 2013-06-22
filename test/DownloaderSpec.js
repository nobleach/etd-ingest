var expect = require('expect.js');
describe("Downloader", function() {
  var downloader;

  beforeEach(function() {
    downloader = require('../lib/Downloader.js');
  });

  it("should download a non empty string from URL", function(done) {
    var url = "http://fam.nwcg.gov/fam-web/hist_209/get_rsac_209_1";
    downloader.downloadString(url, function(report) {
      var len = report.length;
      expect(len).not.to.be(0);
    })
    done();
  });
});