var _ = require('underscore')
, login = require('./lib/Login')
, downloader = require('./lib/Downloader')
, dateParser = require('./lib/DateParser')
, eventIdGenerator = require('./lib/EventIdGenerator')
, stringNormalizer = require('./lib/StringNormalizer')
, arrayBuilder = require('./lib/ArrayBuilder')
, objectBuilder = require('./lib/ObjectBuilder')
, logger = require('./log');

if (process.env.NODE_ENV !== 'production'){
  require('longjohn');
}

var Sequelize = require("sequelize");
var sequelize = new Sequelize('rsacfod', 'rsacfod', 'rsacfodadmin')
var Incident = sequelize.import(__dirname + "/models/Import");
var token;

login.getToken(function(data) {
  token = JSON.parse(data).token;
  var url = 'https://irwint.doi.gov/arcgis/rest/services/Irwin/MapServer/exts/Irwin/GetUpdates?fromDateTime=';

  url += '&toDateTime='; 
  downloader.getUpdates(url, function(report) {

  });
});
// downloader.downloadString("", function(report) {
//   console.log(report);
//   var allIncidents = arrayBuilder.divideIncidents(report);
//
//   var incidentsLength = allIncidents.length;
//   for(var i=0; i<incidentsLength; i++) {
//     objectBuilder.buildIncident(allIncidents[i], function(incident) {
//       console.log(incident);
//     });
//   }
//
//   _.each(allIncidents, function(incident) {
//     objectBuilder.buildIncident(incident, function(incidentObj) {
//       // console.log(incidentObj);
//       Incident.create(incidentObj).success(function(incident) {
//         logger.info('Created ' + incident.event_id);
//       });
//     });
//   });
//
// });

// Incident.sync();



