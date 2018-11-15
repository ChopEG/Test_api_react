const mongoose = require('mongoose');
const {
  toJSON,
} = require('./utils/schema');

const {
  Schema,
} = mongoose;

const ContractorSchema = new Schema({
  avatar: {
    type: String,
    required: true,
  },
});

ContractorSchema.set('toJSON', {
  transform: toJSON,
});

module.exports = mongoose.model('Contractor', ContractorSchema);
