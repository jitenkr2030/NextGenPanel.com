const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema({
  name: { type: String, required: true },
  endpoint: { type: String, required: true },
  method: { type: String, enum: ['GET', 'POST', 'PUT', 'DELETE'], required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
}, { timestamps: true });

const Api = mongoose.model('Api', apiSchema);
module.exports = Api;
