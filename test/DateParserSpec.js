var expect = require('expect.js');
describe("DateParser Suite", function() {
  var dateParser;
  // var expect = require('expect');

  beforeEach(function() {
    dateParser = require('../lib/DateParser.js');
    // dateParser = new DateParser();
  });

  it("should parse D-{MONTH abbreviation}-YY to YYYY-MM-DD", function() {
    expect(dateParser.parseAsMySqlDate("22-OCT-13")).to.be("2013-10-22");
  });
  it("should zero fill dates (days and/or months less than 10)", function() {
    expect(dateParser.parseAsMySqlDate("14-MAY-13")).to.equal("2013-05-14");
  });
  it("should handle dates with 1 digit for the day", function() {
    expect(dateParser.parseAsMySqlDate("1-JUN-12")).to.equal("2012-06-01");
  });
  it("should parse M/D/YY to YYYY-MM-DD", function() {
    expect(dateParser.parseAsMySqlDate("3/10/11")).to.be("2011-03-10");
  });

  it("should handle leap year dates correctly", function() {
    //leap year
    expect(dateParser.parseAsMySqlDate("29-FEB-08")).to.be("2008-02-29");
  });

  it("should return correct ISO dates if they are already in that format", function() {
    expect(dateParser.parseAsMySqlDate("2013-06-07")).to.be("2013-06-07");
  });
});