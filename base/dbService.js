/* eslint-disable no-underscore-dangle */
const { connection } = require('../db');
const models = require('../models');

const defaultSort = 'id';
const defaultLimit = 100;
const defaultSkip = 0;

const getId = (obj) => obj._id;
const create = (Model, data) => Model.create(data);

module.exports = {
  connection,
  defaultSort,
  defaultLimit,
  defaultSkip,
  models,
  getId,
  create,
};
