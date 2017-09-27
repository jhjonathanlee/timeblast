"use strict"

var strftime = require('strftime');

if (!Number.isNaN) {
  Number.isNaN = function isNan(x) {
    return x !== x;
  }
}

module.exports.parseTime = (time) => {
  var date;
  
  if (!Number.isNaN(Number(time))) {
    date = new Date(Number(time));    
  }
  else {
    date = new Date(time);
  }
  
  var parsedTime = {'natural': null, 'unixtime': null};
  if (!Number.isNaN(date)) {
    parsedTime.natural = strftime('%A %B %d, %Y', date);
    parsedTime.unixtime = +(date.getTime()/1000).toFixed(0);
  }
  
  return parsedTime;
};