const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  metric: { type: String, required: true },
  value: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  context: { type: String },
}, { timestamps: true });

const Analytics = mongoose.model('Analytics', analyticsSchema);
module.exports = Analytics;
