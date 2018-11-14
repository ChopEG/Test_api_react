const {
    controller,
} = require('../base');

const {
    listRequestValidator,
} = require('../validators/projects');

const {
    listRequestTransformer,
} = require('../transformers/projects');

const {
    projectService,
} = require('../services');

const list = async (req, res) => {
    const requestData = await listRequestValidator.getData(req);
    const {
        limit,
        offset,
        sort,
    } = listRequestTransformer.transform(requestData);

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
