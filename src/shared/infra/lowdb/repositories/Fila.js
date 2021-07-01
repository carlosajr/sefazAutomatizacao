const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');


const adapter = new FileSync('src/shared/infra/json/data.json');
const db = lowdb(adapter);

async function findAll() {
  const fila = await db.get('fila').value();
  return fila;
}

async function findBy(filter) {
  const elements = await db.get('posts').find(filter).value();
  return elements;
}

async function create(queueEl) {
  await db.get('fila').push(queueEl).write();
  return queueEl;
}

module.exports = {
  findAll,
  findBy,
  create
}