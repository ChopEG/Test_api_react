const { controller } = require('../base');
const { listRequestValidator } = require('../validators/projects');
// const { listRequestAdapter } = require('../adapters/projects');
const { listRequestTransformer } = require('../transformers/projects');
const { projectService } = require('../services');

const list = async (req, res) => {
  const validData = listRequestValidator.validateData(req);
  // const adaptedData = listRequestAdapter.transformData(validData);
  const { limit, offset, sort } = listRequestTransformer.transformData(
    validData,
  );

  const projects = await projectService.findAll({
    sort,
    pagination: {
      limit,
      offset,
    },
  });

  res.send({
    type: projectService.DATA_TYPE,
    data: projects,
    query: {
      sort,
      pagination: {
        limit,
        offset,
      },
    },
  });
};

module.exports = {
  list: controller.createHandler(list),
};
