
exports.aboveThreshold = function(state, acreage) {
  var westernStates = ['AK', 'WA', 'OR', 'CA', 'HI', 'MT', 'ID', 'NV', 'AZ', 'UT',
    'WY', 'CO', 'NM', 'ND', 'SD', 'NE', 'KS', 'OK', 'TX'];
  if(westernStates.indexOf(state) != -1) {
    if(acreage >= 900){
      return true;
    }
  } else {
    console.log("eastern");
    if(acreage >= 450) {
      return true;
    }
  }
  return false;
}