const types = {
    String: String,
    Number: Number,
    Boolean: Boolean,
};

const toType = (type, data) => {
    switch (type) {
        case types.String: {
            return String(data);
        }

        case types.Number: {
            return Number(data);
        }

        case types.Boolean: {
            return Boolean(data);
        }

        default: {
            return data;
        }
    }
};

const transform = (fields, data) => {
    const transformedData = {};
    Object.keys(fields).forEach((key) => {
        if (data[key]) {
            transformedData[key] = toType(fields[key], data[key]);
        }
    });

    return {
        ...data,
        ...transformedData,
    };
};

module.exports = {
    types,
    transform,
};
