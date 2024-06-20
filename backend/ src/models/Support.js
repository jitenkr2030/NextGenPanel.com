const mongoose = require('mongoose');

const supportSchema = new mongoose.Schema({
  ticketNumber: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  issue: { type: String, required: true },
  status: { type: String, enum: ['open', 'closed', 'pending'], default: 'open' },
  created_at: { type: Date, default: Date.now },
}, { timestamps: true });

const Support = mongoose.model('Support', supportSchema);
module.exports = Support;
