const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('src/shared/infra/json/data.json');
const db = lowdb(adapter);

async function findAll() {
  const clientes = await db.get('clientes').value();
  return clientes;
}

module.exports = {
  findAll
}