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
var Incident = sequelize.import(__dirname + "/models/Irwin");
var token;

login.getToken(function(data) {
  token = JSON.parse(data).token;
  var url = 'https://irwint.doi.gov/arcgis/rest/services/Irwin/MapServer/exts/Irwin/GetUpdates?fromDateTime=';
  url += dateParser.getDateTime(dateParser.subtractDays(dateParser.getTimeAsMoment(), 1)); 
  url += '&toDateTime='; 
  url += dateParser.getDateTime(dateParser.getTimeAsMoment());
  url += '&token=';
  url += token;
  url += '&f=json';
  downloader.getUpdates(url, function(report) {
    var incidentList = JSON.parse(report);
    _.each(incidentList.incidents, function(incident) {
      objectBuilder.buildIncident(incident, function(incidentObj) {
        // console.log(incidentObj);
        Incident.create(incidentObj).success(function(incident) {
          logger.info('Created ' + incident.event_id);
        });
      });
    });
  });
});

// Incident.sync();



