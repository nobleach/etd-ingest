var geoCode = require('../lib/GeoCode.js')
  , pad = require('../lib/Pad.js')
  , eventIdGenerator = require('../lib/EventIdGenerator.js')
  , dateParser = require('../lib/DateParser.js')
  , coordinateBuilder = require('../lib/CoordinateBuilder.js')
  , geoCode = require('../lib/GeoCode.js')
  , agency = require('../lib/Agency.js');

exports.buildIncident = function(slice, callback) {
  populateIncidentFromSlice(slice,{},callback);
}

function populateIncidentFromSlice(slice,incident,callback){
  incident.incident_id = slice[1];
  incident.incident_name = slice[0].toUpperCase();
  incident.part_of_complex = null;
  incident.incident_type = slice[7];
  incident.active_incident = 0;
  incident.ig_date = dateParser.parseAsMySqlDate(slice[5]);
  incident.ig_lat = coordinateBuilder.roundAndPadFloat(slice[13]);
  incident.ig_long = fixLongitude(coordinateBuilder.roundAndPadFloat(slice[14]));
  incident.area_burned = slice[16];
  incident.percent_contained = parseFloat(slice[18]);
  if(slice[19] !== '') {
    incident.expected_containment_date = dateParser.parseAsMySqlDate(slice[19]);
  } else {
    incident.expected_containment_date = null
  }
  incident.actual_containment_date = null;
  incident.ig_state = slice[10];
  incident.ig_admin = slice[11];
  incident.ig_agency = slice[10] + '-' + slice[11];
  incident.gacc = null;
  incident.report_date = dateParser.parseAsMySqlDate(slice[3]);
  incident.comment = null;
  incident.fuels = slice[20];
  incident.general_location = slice[15];
  incident.complex = null;
  incident.which_complex = null;

  incident.srcdb = 'ics209';
  incident.added_to_fod = 'FALSE';
  incident.event_id = eventIdGenerator.generateId(incident.ig_state, incident.ig_lat, incident.ig_long, slice[5]);
  geoCode.getPathRowState(incident.ig_lat, incident.ig_long, function(paths) {
    incident.path1 = paths.path;
    incident.row1 = paths.row;
    incident.ig_state = paths.state_abbr;
    agency.getForestName(incident.incident_id, function(forest) {
      incident.ig_usfs_region = forest.forest;
      incident.fregion = forest.fregion;
      callback(incident);
    });
  });

}

//quick little helper function for converting the longitude to a negative
function fixLongitude(lng) {
  // return lng - (lng * 2);
  return '-' + lng;
}

