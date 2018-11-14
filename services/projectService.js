const {
    dbService,
} = require('../base');

const {
    curry,
} = require('../base/utils');

const DATA_TYPE = 'Project';
const {
    Project,
} = dbService.models;

const defaultSort = 'name';
const {
    limit: defaultLimit,
    offset: defaultOffset,
} = dbService.defaultPagination;

const create = curry(dbService.create, Project);
const findAll = (
    {
        sort = defaultSort,
        pagination: {
            limit = defaultLimit,
            offset = defaultOffset,
        },
    },
    populate = ['contractors'],
) => Project
    .find()
    .limit(limit)
    .skip(offset)
    .sort(dbService.normalizeSort(sort))
    .populate(...populate);

module.exports = {
    DATA_TYPE,
    create,
    findAll,
};
