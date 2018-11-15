/* eslint-disable no-param-reassign,no-underscore-dangle */
const toJSON = (doc, ret) => {
  ret.id = ret._id;

  delete ret._id;
  delete ret.__v;

  return ret;
};

module.exports = {
  toJSON,
};
