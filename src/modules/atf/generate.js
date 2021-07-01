const InitializeService = require('./services/InitializeService');
const dataService = require('../../shared/services/DataService');
const loginService = require('./services/LoginService');
const nfeService = require('../nfe/service/NfeService');
const nfceService = require('../nfce/service/NfceService');
const mensagensService = require('../mensagens/service/MensagensService');

async function start() {
    const clientes = await dataService.getClientes();

    for (const cliente of clientes) {
        const browser = await InitializeService.createBrowser();
        const page = await InitializeService.createPageATF(browser, cliente.cnpj);

        await loginService.signInWithCertificate(page);

        await page.waitForTimeout(5000);

        await mensagensService.clearMessages(page);

        await nfeService.generateFile(page, cliente.cnpj);
        await dataService.addInQueue(cliente.cnpj, 'NFE');

        await nfceService.generateFile(page, cliente.cnpj);
        await dataService.addInQueue(cliente.cnpj, 'NFC');

        await InitializeService.conclude(browser);
    };
};

module.exports = {
    start
};