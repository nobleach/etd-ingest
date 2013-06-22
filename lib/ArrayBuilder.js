var _ = require('underscore');
var stringNormalizer = require('../lib/StringNormalizer');
exports.divideIncidents = function(str) {
  str = stringNormalizer.removeStringEnd(stringNormalizer.replaceCarriageReturns(str));
  // var incidents = str.split("^^");
  return _.reduce(str.split("\n"), function(incidents, incident) {
    incidents.push(_.map(incident.split("^^"), function(c) { return c.trim() }));
  return incidents; }, []);
}

