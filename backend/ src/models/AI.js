const mongoose = require('mongoose');

const aiSchema = new mongoose.Schema({
  model: { type: String, required: true },
  version: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
  created_at: { type: Date, default: Date.now },
}, { timestamps: true });

const AI = mongoose.model('AI', aiSchema);
module.exports = AI;
