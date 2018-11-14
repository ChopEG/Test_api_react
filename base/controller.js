const ErrorResponse = require('./ErrorResponse');

const createErrorResponse = err => new ErrorResponse(err);
const createHandler = handle => async (req, res) => {
    try {
        await handle(req, res);
    } catch (err) {
        const response = createErrorResponse(err);
        return res.status(response.getStatusCode())
            .send(response);
    }
};

module.exports = {
    createHandler,
};
