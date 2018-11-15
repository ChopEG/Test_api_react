const curry = (fn, ...args) => (...rest) => fn(...args, ...rest);
const negate = (str) => `-${str}`;

module.exports = {
  curry,
  negate,
};
