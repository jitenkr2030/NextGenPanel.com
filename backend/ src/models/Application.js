const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  version: { type: String, required: true },
  status: { type: String, enum: ['running', 'stopped'], default: 'stopped' },
}, { timestamps: true });

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;
