const {
  dbService,
} = require('../base');

const {
  curry,
} = require('../base/utils');

const DATA_TYPE = 'Contractor';
const {
  Contractor,
} = dbService.models;

const create = curry(dbService.create, Contractor);

module.exports = {
  DATA_TYPE,
  create,
};
