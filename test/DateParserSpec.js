var expect = require('expect.js');
describe("DateParser Suite", function() {
  var dateParser;
  // var expect = require('expect');

  beforeEach(function() {
    dateParser = require('../lib/DateParser.js');
    // dateParser = new DateParser();
  });

  it("should parse D-{MONTH abbreviation}-YY to YYYY-MM-DD", function() {

    expect(dateParser.parseAsMySqlDate("14-MAY-13")).to.equal("2013-05-14");
    expect(dateParser.parseAsMySqlDate("1-JUN-12")).to.equal("2012-06-01");
    expect(dateParser.parseAsMySqlDate("22-OCT-13")).to.be("2013-10-22");
    //leap year
    expect(dateParser.parseAsMySqlDate("29-FEB-08")).to.be("2008-02-29");

  });
  it("should parse M/D/YY to YYYY-MM-DD", function() {
    expect(dateParser.parseAsMySqlDate("3/10/11")).to.be("2011-03-10");
  });

  it("should return correct ISO dates if they are already in that format", function() {
    expect(dateParser.parseAsMySqlDate("2013-06-07")).to.be("2013-06-07");
  });
});