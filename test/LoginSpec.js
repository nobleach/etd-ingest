var expect = require('chai').expect;
describe("Login Suite", function() {
  var login;

  beforeEach(function() {
    login = require('../lib/Login.js');
  });

  it("should return a token from a POST request", function(done) {
    login.getToken(function(token) {
      
      var tokenObj = JSON.parse(token);
      expect(tokenObj).to.be.a('object');
      expect(tokenObj).to.have.property('token');
      done();
    });
  });

  it("should not return an error", function(done) {
    login.getToken(function(token) {
      expect(token).to.not.contain('error');
      done();
    });
  })
});
