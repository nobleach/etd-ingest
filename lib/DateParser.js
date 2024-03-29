exports.parseAsMySqlDate = function(str) {
  // return "2013-05-14";
  var iso_date_regex = /^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/
  if (str.match(iso_date_regex)) return str;
  var d = new Date(str);
  var year = d.getFullYear();
  var month = d.getMonth() + 1;

  function getMonthPadded(month) {
    return month < 10 ? '0' + month : month; // ('' + month) for string result
  }

  var day = d.getDate();

  function getDatePadded(day) {
    return day < 10 ? '0' + day : day;
  }


  return year + "-" + getMonthPadded(month) + "-" + getDatePadded(day);

}

exports.parseWithNoDashes  = function(str) {
  var d = new Date(str);
  var year = d.getFullYear();
  var month = d.getMonth() + 1;

  function getMonthPadded(month) {
    return month < 10 ? '0' + month : month; // ('' + month) for string result
  }

  var day = d.getDate();

  function getDatePadded(day) {
    return day < 10 ? '0' + day : day;
  }


  return year + getMonthPadded(month) + getDatePadded(day);
}