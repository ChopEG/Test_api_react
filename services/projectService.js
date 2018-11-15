const { dbService } = require('../base');
const { curry } = require('../base/utils');

const DATA_TYPE = 'Project';
const defaultSort = 'name';
const { defaultLimit, defaultSkip, models } = dbService;
const { Project } = models;

const create = curry(dbService.create, Project);
const findAll = (
  { sort = defaultSort, limit = defaultLimit, skip = defaultSkip },
  populate = ['contractors'],
) =>
  Project.find()
    .limit(limit)
    .skip(skip)
    .sort(dbService.normalizeSort(sort))
    .populate(...populate);

module.exports = {
  DATA_TYPE,
  create,
  findAll,
};
