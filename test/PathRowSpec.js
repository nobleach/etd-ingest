var expect = require('expect.js');
describe('Path/Row suite', function() {
  var pathRow;

  beforeEach(function() {
    pathRow = require('../lib/PathRow.js');
  });

  it("should return an object with 2 path keys and 2 row keys", function() {
    pathRow.fromLatLng(34.711, -98.800, function(result) {
      expect(result).to.eql({path1: 29, path2: 28, row1: 36, row2: 36});
    });
  });

});