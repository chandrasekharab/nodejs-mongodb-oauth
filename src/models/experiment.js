const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experimentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  roi: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  }
}, { timestamps: true } );

const Experiment = mongoose.model('Experiment', experimentSchema);

module.exports = Experiment;