const {
    validator,
    errorFactory,
} = require('../../base');

const {
    sort: sortSchema,
    limit: limitSchema,
    offset: offsetSchema,
} = require('../../base/validation/schemas');

const {
    curry,
} = require('../../base/utils');

const sortFields = [
    'name',
    '-name',
    'budget',
    '-budget',
];

const schema = {
    limit: limitSchema(),
    offset: offsetSchema(),
    sort: sortSchema({
        sortFields,
    }),
};

const createDataValidationError = curry(errorFactory.createDataValidationError, 'List request validation error');

const getData = (req) => {
    const {
        query,
    } = req;

    const data = {
        sort: query.sort,
        limit: query.limit,
        offset: query.offset,
    };

    const errors = validator.validateData(schema, data);
    const dataValidationError = createDataValidationError(
        {
            query,
        },
        errors,
    );

    if (dataValidationError.errors.length > 0) {
        throw dataValidationError;
    }

    return data;
};

module.exports = {
    getData,
};
