const mongoose = require('mongoose');

const networkingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
  configuration: { type: String, required: true },
}, { timestamps: true });

const Networking = mongoose.model('Networking', networkingSchema);
module.exports = Networking;
