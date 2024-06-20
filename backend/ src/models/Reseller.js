const mongoose = require('mongoose');

const resellerSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  contactInfo: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
}, { timestamps: true });

const Reseller = mongoose.model('Reseller', resellerSchema);
module.exports = Reseller;
