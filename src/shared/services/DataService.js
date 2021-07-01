const { v4: uuidv4 } = require('uuid');

const getDate = require('../services/DateService');
const clientesRepository = require('../infra/lowdb/repositories/Clientes');
const filaRepository = require('../infra/lowdb/repositories/Fila');

async function getClientes() {
  const clientes = await clientesRepository.findAll();
  return clientes;
}

async function addInQueue(cnpj, type) {
  const queueEl = {
    id: uuidv4(),
    cnpj,
    type,
    status: "aguardando",
    createdAt: getDate.getNow()
  }
  const el = await filaRepository.create(queueEl);
  return el;
}

async function getElementsByType(type) {
  const filaElements = await filaRepository.findAll();
  const filaFiltered = await filaElements.filter(filaElement => filaElement.type === type);
  return filaFiltered;
}

module.exports = {
  getClientes,
  addInQueue,
  getElementsByType
};