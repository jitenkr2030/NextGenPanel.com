const mongoose = require('mongoose');

const migrationSchema = new mongoose.Schema({
  source: { type: String, required: true },
  destination: { type: String, required: true },
  status: { type: String, enum: ['pending', 'in-progress', 'completed', 'failed'], default: 'pending' },
  timestamp: { type: Date, default: Date.now },
}, { timestamps: true });

const Migration = mongoose.model('Migration', migrationSchema);
module.exports = Migration;
