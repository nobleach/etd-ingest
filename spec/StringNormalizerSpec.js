var expect = require('expect.js');
describe('String Normalizer', function() {
  var stringNormalizer;

  beforeEach(function() {
    stringNormalizer = require('../lib/StringNormalizer.js');
  });

  it("should remove all carriage returns from string", function() {
    expect(stringNormalizer.replaceCarriageReturns("abc\r\ndef")).to.equal("abc def");
  });

  it("should replace all newlines with '^^'", function() {
    expect(stringNormalizer.replaceNewlines("abc\ndef")).to.equal("abc^^def");
  });
});