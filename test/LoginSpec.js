var expect = require('expect.js');
describe("Login Suite", function() {
  var login;

  beforeEach(function() {
    login = require('../lib/Login.js');
  });

  it("should return a token from a POST request", function(done) {
    login.getToken(function(token) {
      console.log(token);
      var len = token.length;
      expect(len).not.to.be(0);
    })
    done();
  });
});
