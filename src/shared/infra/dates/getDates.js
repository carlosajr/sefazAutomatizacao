require('datejs');

function firstDayOfLastMonth() {
  let fd = Date.today().addMonths(-1).moveToFirstDayOfMonth();
  return fd.toString("ddMMyyyy");
}

function lastDayOfLastMonth() {
  let ld = Date.today().addMonths(-1).moveToLastDayOfMonth();
  return ld.toString("ddMMyyyy");
}

function now() {
  let ld = Date.today().setTimeToNow();
  return ld.toString("yyyy-MM-dd HH:mm:ss");
}

module.exports = {
  firstDayOfLastMonth,
  lastDayOfLastMonth,
  now
};