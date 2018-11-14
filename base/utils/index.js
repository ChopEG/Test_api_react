const curry = (fn, ...args) => fn.bind(undefined, ...args);

module.exports = {
    curry,
};
