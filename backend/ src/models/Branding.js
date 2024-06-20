const mongoose = require('mongoose');

const brandingSchema = new mongoose.Schema({
  logo: { type: String, required: true },
  colorScheme: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
}, { timestamps: true });

const Branding = mongoose.model('Branding', brandingSchema);
module.exports = Branding;
