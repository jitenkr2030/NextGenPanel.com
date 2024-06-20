const mongoose = require('mongoose');

const marketingSchema = new mongoose.Schema({
  campaignName: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
}, { timestamps: true });

const Marketing = mongoose.model('Marketing', marketingSchema);
module.exports = Marketing;
