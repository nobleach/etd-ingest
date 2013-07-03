var expect = require('expect.js');
describe("EventIdGenerator Suite", function() {
  var eventIdGenerator;
  var validId;

  beforeEach(function() {
    eventIdGenerator = require('../lib/EventIdGenerator.js');
    validId = eventIdGenerator.generateId("NM", '32.285', '-92.090', "14-MAY-13");
  });

  it("should create valid ID", function() {
    expect(validId).to.be("NM3228509209020130514");
  });

  it("should be 21 characters long", function() {
    expect(validId.length).to.be(21);
  });

  // it("should zerofill decimals to 3 significant figures", function() {

  // });

  // it("should pad a longitude value with a zero if it's less than 100", function() {

  // });

  // it("should contain a valid state id", function() {

  // });

  // it("should include a date without dashes", function() {

  // });
});
