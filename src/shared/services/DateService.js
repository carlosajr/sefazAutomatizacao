const getDate = require('../infra/dates/getDates');

function getFirstDayOfLastMonth() {
  return getDate.firstDayOfLastMonth();
}

function getLastDayOfLastMonth() {
  return getDate.lastDayOfLastMonth();
}

function getNow() {
  return getDate.now();
}

module.exports = {
  getFirstDayOfLastMonth,
  getLastDayOfLastMonth,
  getNow
};