var expect = require('expect.js');
describe("Threshold Suite", function() {
  var pad;

  beforeEach(function() {
    threshold = require('../lib/Threshold.js');
  });

  it("should take a state and acreage and return true if acrearage is above Eastern threshold", function() {
    expect(threshold.aboveThreshold("FL", 451)).to.be(true);
  });

  it("should take a state and acreate and return false if acreage is below 450", function() {
    expect(threshold.aboveThreshold("FL", 400)).to.be(false);
  });

  it("should take a state and acreage and return true if acrearage is above Western threshold", function() {
    expect(threshold.aboveThreshold("UT", 901)).to.be(true);
  });

});
