async function signInWithCertificate(page) {
  await page.waitForSelector('#contents');
  const iFrameLogin = await page.$('#contents');
  const frameLogin = await iFrameLogin.contentFrame();
  await frameLogin.click('body > table > tbody > tr:nth-child(2) > td > table:nth-child(2) > tbody > tr:nth-child(2) > td > a');
}

async function withCredentials(page) {

}

module.exports = {
  signInWithCertificate
}