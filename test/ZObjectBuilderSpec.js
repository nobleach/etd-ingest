var expect = require('expect.js')

describe("ObjectBuilder Suite", function() {
  var objectBuilder;
  var test_array =[ 'Silver',
    'NM-GNF-000230',
    'Y',
    '18-JUN-13',
    '1800',
    '07-JUN-13',
    'L',
    'WF',
    'Matt Reidy',
    '2',
    'NM',
    'GNF',
    'Grant',
    '32.888889',
    '107.809722',
    'Vicinity of Kingston, NM',
    '24800',
    'ACRES',
    '5',
    '',
    'Highly varied fuels ranging from dry mixed conifer at the highest elevations to ponderosa pine, Pinyon-Juniper and interior chaparral dominate the lower elevations. Fuel loading is high due to lack of fire disturbance in past century.',
    'Extreme',
    '5590600' ]
  var test_object = {
    event_id: 'NM3288910781020130607',
    incident_id: 'NM-GNF-000230',
    incident_name: 'SILVER',
    part_of_complex: null,
    incident_type: 'WF',
    active_incident: 0,
    ig_date: '2013-06-07',
    ig_lat: '32.889',
    ig_long: '-107.810',
    area_burned: 24800,
    percent_contained: 5,
    expected_containment_date: null,
    actual_containment_date: null,
    ig_state: 'NM',
    ig_admin: 'GNF',
    ig_agency: 'NM-GNF',
    ig_usfs_region: 'Gila National Forest',
    fregion: 3,
    gacc: null,
    report_date: '2013-06-18',
    comment: null,
    fuels: 'Highly varied fuels ranging from dry mixed conifer at the highest elevations to ponderosa pine, Pinyon-Juniper and interior chaparral dominate the lower elevations. Fuel loading is high due to lack of fire disturbance in past century.',
    general_location: 'Vicinity of Kingston, NM',
    complex: null,
    which_complex: null,
    path1: 34,
    row1: 37,
    srcdb: 'ics209',
    added_to_fod: 'FALSE',
    above_mapping_threshold: 1
  }

  beforeEach(function() {
    objectBuilder = require('../lib/ObjectBuilder.js');
  });

  it("should build an object from an array", function(done) {
    objectBuilder.buildIncident(test_array, function(result) {
      done();
      expect(result).to.eql(test_object);
    });
  });

});