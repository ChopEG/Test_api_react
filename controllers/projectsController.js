const { controller } = require('../base');
const { listRequestValidator } = require('../validators/projects');
const { listRequestAdapter } = require('../adapters/projects');
const { listRequestTransformer } = require('../transformers/projects');
const { projectService } = require('../services');

const list = async (req, res) => {
  const validData = listRequestValidator.validateData(req);
  const adaptedData = listRequestAdapter.transformData(validData);
  const { limit, skip, sort } = listRequestTransformer.transformData(
    adaptedData,
  );

  const metadata = { limit, skip, sort };
  const projects = await projectService.findAll(metadata);

  res.send({
    metadata,
    type: projectService.DATA_TYPE,
    data: projects,
  });
};

module.exports = {
  list: controller.createHandler(list),
};
