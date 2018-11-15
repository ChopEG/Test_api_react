const curry = (fn, ...args) => (...rest) => fn(...args, ...rest);
const negotiate = (str) => `-${str}`;

module.exports = {
  curry,
  negotiate,
};
