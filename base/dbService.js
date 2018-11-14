const {
    connection,
} = require('../db');

const models = require('../models');

const NEGATIVE_RE = /^-/;

const defaultSort = 'id';
const defaultPagination = {
    limit: 100,
    offset: 0,
};

const getId = obj => obj._id;
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
    defaultPagination,
    models,
    getId,
    create,
    normalizeSort,
};
