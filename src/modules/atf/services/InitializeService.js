const Initializer = require('../infra/puppeteer/Initialize');
const Navigate = require('../../../shared/infra/puppeteer/Navigate');

async function createBrowser() {
  return Initializer.launch();
}

async function createPageATF(browser, cnpj) {
  const page = await Initializer.newPage(browser);

  page.on('dialog', async dialog => {
    await dialog.accept();
  });

  await Navigate.navigateTo(page, 'https://www4.sefaz.pb.gov.br/atf/?cliente=' + cnpj);

  return page;
}

async function conclude(browser) {
  await Initializer.closeBrowser(browser);
}

module.exports = {
  createBrowser,
  createPageATF,
  conclude
};
