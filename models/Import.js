module.exports = function(sequelize, DataTypes) {
  return sequelize.define("import", {
    event_id: DataTypes.STRING,
    incident_id: DataTypes.STRING,
    incident_name: DataTypes.STRING,
    part_of_complex: DataTypes.BOOLEAN,
    incident_type: DataTypes.STRING,
    active_incident: DataTypes.BOOLEAN,
    ig_date: DataTypes.DATE,
    ig_lat: DataTypes.STRING,
    ig_long: DataTypes.STRING,
    area_burned: DataTypes.INTEGER,
    percent_contained: DataTypes.INTEGER,
    expected_containment_date: DataTypes.DATE,
    actual_containment_date: DataTypes.DATE,
    ig_state: DataTypes.STRING,
    ig_admin: DataTypes.STRING,
    ig_agency: DataTypes.STRING,
    ig_usfs_region: DataTypes.STRING,
    fregion: DataTypes.INTEGER,
    gacc: DataTypes.STRING,
    report_date: DataTypes.DATE,
    comment: DataTypes.TEXT,
    fuels: DataTypes.TEXT,
    general_location: DataTypes.TEXT,
    complex: DataTypes.BOOLEAN,
    which_complex: DataTypes.STRING,
    path1: DataTypes.INTEGER,
    row1: DataTypes.INTEGER,
    srcdb: DataTypes.STRING,
    added_to_fod: DataTypes.STRING,
    above_mapping_threshold: DataTypes.INTEGER
  }, {
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  })
}
