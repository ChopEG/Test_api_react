const mongoose = require('mongoose');
const { toJSON } = require('./utils/schema');

const { Schema } = mongoose;
const { Types } = Schema;
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  budget: {
    type: Number,
    required: true,
  },

  location: {
    city: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },
  },

  description: {
    type: String,
    required: true,
  },

  contractors: [
    {
      type: Types.ObjectId,
      ref: 'Contractor',
    },
  ],

  image: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },

  progress: {
    type: Number,
    required: true,
  },
});

ProjectSchema.set('toJSON', {
  transform: toJSON,
});

module.exports = mongoose.model('Project', ProjectSchema);
