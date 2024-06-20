const mongoose = require('mongoose');

const stagingSchema = new mongoose.Schema({
  environmentName: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
  deployed_at: { type: Date, default: Date.now },
}, { timestamps: true });

const Staging = mongoose.model('Staging', stagingSchema);
module.exports = Staging;
