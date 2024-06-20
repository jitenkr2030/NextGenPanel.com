const mongoose = require('mongoose');

const cloudSchema = new mongoose.Schema({
  provider: { type: String, required: true },
  resourceType: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
}, { timestamps: true });

const Cloud = mongoose.model('Cloud', cloudSchema);
module.exports = Cloud;
