const puppeteer = require('puppeteer-extra');
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha');

require('dotenv').config()

puppeteer.use(
  RecaptchaPlugin({
    provider: {
      id: process.env.RECAPTCHA_ID,
      token: process.env.RECAPTCHA_TOKEN
    },
    visualFeedback: true
  })
)

async function launch() {
  return await puppeteer.launch({ headless: false });
}

async function newPage(browser) {
  return await browser.newPage();
}

async function closeBrowser(browser) {
  await browser.close();
}


module.exports = {
  launch,
  newPage,
  closeBrowser
};
