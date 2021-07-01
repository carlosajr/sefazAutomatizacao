const getDate = require('../../../shared/services/DateService');

async function generateFile(page, cnpj) {
  await page.goto('https://www4.sefaz.pb.gov.br/atf/fis/FISf_ConsultaGenericaEmitenteNFCe.do?limparSessao=true')

  await page.waitForSelector('[src="../componentes/CodDescLst.jsp?id=FISf_ConsultaGenericaEmitenteNFCe_cmpEmit"]');
  const iFrameCNfc = await page.$('[src="../componentes/CodDescLst.jsp?id=FISf_ConsultaGenericaEmitenteNFCe_cmpEmit"]');
  const frameCNfc = await iFrameCNfc.contentFrame();

  await page.type('[name="edtDtInicial"]', getDate.getFirstDayOfLastMonth());
  await page.type('[name="edtDtFinal"]', getDate.getLastDayOfLastMonth());
  await page.select('[name="cmbTpDoccmpEmit"]', '2');
  await frameCNfc.type('[name="hidNrDocumentocmpEmit"]', cnpj);
  await frameCNfc.click('[name="btnPesquisar"]');
  await page.select('[name="cmbTpExibicao"]', '3');

  await page.solveRecaptchas();
  await Promise.all([
    page.waitForNavigation(),
    await page.click('[name="btnConsultar"]')
  ])

}

module.exports = {
  generateFile
}