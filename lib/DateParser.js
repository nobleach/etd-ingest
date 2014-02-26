var moment = require('moment');

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

function padData(data) {
  return data < 10 ? '0' + data : data;
}

exports.getTimeAsMoment = function() {
  return moment.utc();
}

exports.subtractDays = function(date, offset) {
  var offset = offset || 0;
  return date.subtract('days', offset);
}

exports.getDateTime = function(mom) {
  var Y = mom.get('year');
  var M = mom.get('month') + 1;
  var D = mom.get('date');
  var h = mom.get('hour');
  var m = mom.get('minute');
  var s = mom.get('second');
  return Y+'-'+padData(M)+'-'+padData(D)+'T'+padData(h)+':'+padData(m)+':'+padData(s)+'Z';
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
