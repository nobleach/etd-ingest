var geoCode = require('../lib/GeoCode.js')
  , pad = require('../lib/Pad.js')
  , eventIdGenerator = require('../lib/EventIdGenerator.js')
  , dateParser = require('../lib/DateParser.js')
  , pathRow = require('../lib/PathRow.js')
  , coordinateBuilder = require('../lib/CoordinateBuilder.js')
  , geoCode = require('../lib/GeoCode.js')
  , agency = require('../lib/Agency.js');

exports.buildIncident = function(slice, callback) {
  incident = {};
  incident.rsac_id = eventIdGenerator.generateId(slice[10], slice[13], slice[14], slice[5]);
  incident.incident_id = slice[1];
  incident.incident_name = slice[0].toUpperCase();
  incident.part_of_complex = null;
  incident.incident_type = slice[7];
  incident.active_incident = 0;
  incident.ig_date = dateParser.parseAsMySqlDate(slice[5]);
  incident.ig_lat = coordinateBuilder.truncateFloat(slice[13]);
  incident.ig_long = fixLongitude(coordinateBuilder.truncateFloat(slice[14]));
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

  pathRow.fromLatLng(incident.ig_lat, incident.ig_long, function(paths) {
    incident.path1 = paths.path1;
    incident.row1 = paths.row1;
    incident.path2 = paths.path2;
    incident.row2 = paths.row2;

    agency.getForestName(incident.incident_id, function(forest) {
      incident.ig_usfs_region = forest.forest;
      incident.fregion = forest.fregion;

      geoCode.getLocation(incident.ig_lat,incident.ig_long, function(result) {
        incident.city = result.city;
        incident.state = result.state;
        callback(incident);
      });
    });
  });

  incident.next_pass = null;
  incident.report_date = dateParser.parseAsMySqlDate(slice[3]);
  incident.comment = null;
  incident.fuels = slice[20];
  incident.general_location = slice[15];
  incident.complex = null;
  incident.which_complex = null;

  incident.srcdb = 'ics209';
  incident.added_to_fod = 'FALSE';


}
//quick little helper function for converting the longitude to a negative
function fixLongitude(lng) {
  return lng - (lng * 2);
}

