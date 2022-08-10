const mongoose = require('mongoose');

const urlSchema = {
  local: {
    type: String,
    required: true,
  },
  external: {
    type: String,
    required: true,
  },
  visits: {
    type: Number,
    required: true,
    default: 0,
  },
};

const URL = mongoose.model('URL', urlSchema);
module.exports = URL;
