const getDate = require('../../../shared/services/DateService');

async function generateFile(page, cnpj) {

  await page.goto('https://www4.sefaz.pb.gov.br/atf/fis/FISf_GerarXmlNFe.do?limparSessao=true')

  await page.waitForSelector('[src="../componentes/CodDescLst.jsp?id=FISf_GerarXmlNFe_cmpEmit"]');
  const iFrameC = await page.$('[src="../componentes/CodDescLst.jsp?id=FISf_GerarXmlNFe_cmpEmit"]');
  const frameC = await iFrameC.contentFrame();

  await page.type('[name="edtDtInicial"]', getDate.getFirstDayOfLastMonth());
  await page.type('[name="edtDtFinal"]', getDate.getLastDayOfLastMonth());
  await page.select('[name="cmbTpDoccmpEmit"]', '2');
  await frameC.type('[name="hidNrDocumentocmpEmit"]', cnpj);
  await frameC.click('[name="btnPesquisar"]');
  await page.select('[name="cmbTpExibicao"]', '2');
  await page.waitForTimeout(1000);
  await page.click('[name="btnConsultar"]');
  await page.waitForTimeout(2000);

}

module.exports = {
  generateFile
}