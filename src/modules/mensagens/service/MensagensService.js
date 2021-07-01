async function clearMessages(page) {
  await page.goto('https://www4.sefaz.pb.gov.br/atf/seg/SEGf_MinhasMensagens.do?limparSessao=true')

  const checkMensagens = await page.$('input[name="chbMensagems"]');
  if (checkMensagens) {
    await page.click('input[name="chbMensagems"]');
    await page.click('input[name="btnNaoVisualizar"]');
  }

  await page.waitForTimeout(1000);
}

async function downloadFile(page) {
  await page.goto('https://www4.sefaz.pb.gov.br/atf/seg/SEGf_MinhasMensagens.do?limparSessao=true')
  await page.waitForTimeout(1000);
  const receivedMessage = await checkReceivedMessage(page);
  console.log(receivedMessage);
  await page.waitForTimeout(5000);
}

async function checkReceivedMessage(page) {
  const tr = await page.$('body > form > div > table > tbody > tr.tdPadrao');

  if (tr) return true;

  updateMessages(page);
}

async function updateMessages(page) {
  await page.click('input[name="btnNovas"]');
  await page.waitForTimeout(3000);
  checkReceivedMessage(page);
}

//body > form > div > table > tbody > tr.tdPadrao
// body > form > div > table > tbody > tr.tdPadrao > td: nth - child(3)
// btnNovas
module.exports = {
  clearMessages,
  downloadFile
}