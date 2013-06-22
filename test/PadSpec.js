var expect = require('expect.js');
describe("Padding Suite", function() {
  var pad;

  beforeEach(function() {
    pad = require('../lib/Pad.js');
  });

  it("should pad digits less than 100 with a zero", function() {
    expect(pad.padLeft("83", 3)).to.be("083");
  });

  it("should not pad digits more than 100", function() {
    expect(pad.padLeft("102", 3)).to.be("102");
  });

  it("should pad a decimal to 3 sig figs", function() {
    expect(pad.padRight("03", 3)).to.be("030");
  });

});