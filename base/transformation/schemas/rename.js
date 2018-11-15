const { toKeys } = require('../transformer');
const { curry } = require('../../utils');

module.exports = (keys) => [['Failed to rename data', curry(toKeys, keys)]];
