var _ = require('underscore')
, downloader = require('./lib/Downloader')
, dateParser = require('./lib/DateParser')
, eventIdGenerator = require('./lib/EventIdGenerator')
, stringNormalizer = require('./lib/StringNormalizer')
, arrayBuilder = require('./lib/ArrayBuilder')
, objectBuilder = require('./lib/ObjectBuilder');

var Incident = sequelize.import(__dirname + "/models/Incident");

downloader.downloadString("http://fam.nwcg.gov/fam-web/hist_209/get_rsac_209_1", function(report) {
  var allIncidents = arrayBuilder.divideIncidents(report);

  // var incidentsLength = allIncidents.length;
  // for(var i=0; i<incidentsLength; i++) {
  //   objectBuilder.buildIncident(allIncidents[i], function(incident) {
  //     console.log(incident);
  //   });
  // }

  _.each(allIncidents, function(incident) {
    objectBuilder.buildIncident(incident, function(incidentObj) {
      console.log(incidentObj);
    });
  });

});



