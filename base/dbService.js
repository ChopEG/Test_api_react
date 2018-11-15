/* eslint-disable no-underscore-dangle */
const { connection } = require('../db');
const models = require('../models');

const NEGATIVE_RE = /^-/;

const defaultSort = 'id';
const defaultLimit = 100;
const defaultSkip = 0;

const getId = (obj) => obj._id;
const normalizeSort = (sort) => {
  const direction = sort.startsWith('-') ? -1 : 1;
  const field = sort.replace(NEGATIVE_RE, '');
  return {
    [field]: direction,
  };
};

const create = (Model, data) => Model.create(data);

module.exports = {
  connection,
  defaultSort,
  defaultLimit,
  defaultSkip,
  models,
  getId,
  create,
  normalizeSort,
};
