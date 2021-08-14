var m, d;
m = new Date(); d = new Date();
m.setFullYear(2020, 1, 2); d.setFullYear(2020, 1, 2);
m.setHours(00); m.setMinutes(00); m.setSeconds(00);
d.setHours(14); d.setMinutes(13); d.setSeconds(15);

function secondsSinceMidnight(Date) {
  const sResult = Date.getHours()*3600 + Date.getMinutes()*60 + Date.getSeconds()
  return sResult
}

function secondsRemInDay(Date) {
  const sResult = 24*3600 - secondsSinceMidnight(Date)
  return sResult
}

function fullMinutesSinceMidnight(Date) {
  const mResult = Date.getHours()*60 + Date.getMinutes()
  return mResult
}

//console.log similar to print, but can only print multiple args, not lines
//calling a const inside a function same as python internal vars
