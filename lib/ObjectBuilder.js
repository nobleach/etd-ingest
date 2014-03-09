var geoCode = require('../lib/GeoCode.js')
  , pad = require('../lib/Pad.js')
  , eventIdGenerator = require('../lib/EventIdGenerator.js')
  , dateParser = require('../lib/DateParser.js')
  , coordinateBuilder = require('../lib/CoordinateBuilder.js')
  , geoCode = require('../lib/GeoCode.js')
  , agency = require('../lib/Agency.js')
  , getIncident = require('../lib/GetIncident.js')
  , threshold = require('../lib/Threshold.js');

exports.buildIncident = function(slice, callback) {
  console.log(slice);
  populateIncidentFromSlice(slice,{},callback);
}

function populateIncidentFromSlice(slice,incident,callback){
  incident.importJSON = JSON.stringify(slice);
  incident.irwinID = slice.irwinID;
  incident.incident_id = slice.attributes.UniqueFireIdentifier;
  incident.incident_name = slice.attributes.IncidentName.toUpperCase();
  incident.part_of_complex = slice.attributes.IsComplex == "true" ? 1 : 0;
  incident.parentComplexIrwinID = slice.attributes.ComplexParentIrwinID;
  incident.incident_type = slice.attributes.IncidentTypeCategory;
  incident.active_incident = slice.attributes.IsActive == "true" ? 1 : 0;
  incident.ig_date = dateParser.parseAsMySqlDate(slice.attributes.FireDiscoveryDateTime);
  incident.ig_lat = coordinateBuilder.roundAndPadFloat(slice.pointOfOrigin.y);
  incident.ig_long = coordinateBuilder.roundAndPadFloat(slice.pointOfOrigin.x);
  if(slice.attributes.CalculatedAcres) {
    incident.area_burned = slice.attributes.CalculatedAcres;
  }
  var percentContained = parseFloat(slice.attributes.PercentContained, 10);
  if(!isNaN(percentContained)) {
    incident.percent_contained = percentContained; 
  }
  if(slice.attributes.EstimatedContainmentDate) {
    incident.expected_containment_date = dateParser.parseAsMySqlDate(slice.attributes.EstimatedContainmentDate); 
  }
  if(slice.attributes.ContainmentDate) {
    incident.actual_containment_date = dateParser.parseAsMySqlDate(slice.attributes.ContainmentDate);
  }
  incident.ig_state = slice.attributes.POOState.substring(3);
  incident.ig_admin = null;
  incident.ig_agency = slice.attributes.DispatchCenterID
  incident.gacc = slice.attributes.GACC;
  if(slice.attributes.ICS209ReportDateTime) {
    incident.report_date = dateParser.parseAsMySqlDate(slice.attributes.ICS209ReportDateTime);
  }
  // incident.comment = null;
  // incident.fuels = slice[20];
  // incident.general_location = slice[15];
  incident.complex = slice.attributes.IsComplex == "true" ? 1:0;
  // incident.which_complex = null;

  incident.srcdb = slice.attributes.RecordSource;

  incident.event_id = eventIdGenerator.generateId(incident.ig_state, incident.ig_lat, incident.ig_long, slice.attributes.FireDiscoveryDateTime);
  geoCode.getPathRowState(incident.ig_lat, incident.ig_long, function(paths) {
    incident.path1 = paths.path;
    incident.row1 = paths.row;
    incident.ig_state = paths.state_abbr;
    incident.above_mapping_threshold = threshold.aboveThreshold(incident.ig_state, incident.area_burned) ? 1 : 0;
    agency.getForestName(incident.incident_id, function(forest) {
      incident.ig_usfs_region = forest.forest;
      incident.fregion = forest.fregion;
      getIncident.incidentExists(incident.incident_name, incident.event_id, function(result) {
        incident.added_to_fod = result ? 'TRUE' : 'FALSE';
        callback(incident);
      });
    });
  });

}

//quick little helper function for converting the longitude to a negative
function fixLongitude(lng) {
  // return lng - (lng * 2);
  return '-' + lng;
}

