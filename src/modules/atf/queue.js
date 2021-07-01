const dataService = require('../../shared/services/DataService');

async function start() {
  const elementsNfe = await dataService.getElementsByType('NFE');
  console.log(elementsNfe);

  const elementsNfce = await dataService.getElementsByType('NFC');
  console.log(elementsNfce);
}

module.exports = {
  start
};