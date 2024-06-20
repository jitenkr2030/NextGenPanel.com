const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
  metric: { type: String, required: true },
  value: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  context: { type: String },
}, { timestamps: true });

const Performance = mongoose.model('Performance', performanceSchema);
module.exports = Performance;
