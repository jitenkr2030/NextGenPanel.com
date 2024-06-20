const mongoose = require('mongoose');

const securitySchema = new mongoose.Schema({
  policyName: { type: String, required: true },
  rules: { type: Array, required: true },
  status: { type: String, enum: ['enabled', 'disabled'], default: 'disabled' },
}, { timestamps: true });

const Security = mongoose.model('Security', securitySchema);
module.exports = Security;
