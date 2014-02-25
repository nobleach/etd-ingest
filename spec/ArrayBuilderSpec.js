var expect = require('expect.js');
describe("Array building suite", function() {
  var arrayBuilder;
  var report = "Giese Lane^^FL-FLS-2013-01-0372^^N^^03-JUN-13^^1539^^30-MAY-13^^H^^WF^^Adam Parden^^5^^FL^^FLS^^Escambia^^30.396389^^87.3375^^Giese Lane, Pensacola^^201^^ACRES^^100^^31-MAY-13^^^^Medium^^0\nCement^^FL-FLS-2013-11-0309^^N^^03-JUN-13^^1137^^27-MAY-13^^H^^WF^^Timothy Fox^^6^^FL^^FLS^^Hernando^^28.58^^82.454167^^10311 Cement Plant Road^^812^^ACRES^^100^^11-JUN-13^^^^High^^0";

  beforeEach(function() {
    arrayBuilder = require('../lib/ArrayBuilder.js');
  });

  // it("should split the string on the '^^' characters and return 46 elements", function(done) {
  //   expect(arrayBuilder.splitString(report).length).to.be(46);
  //   done();
  // });

  it("Given 2 incidents, it should create return an array with 2 subarrays", function() {
    expect(arrayBuilder.divideIncidents(report).length).to.be(2);
  });


});