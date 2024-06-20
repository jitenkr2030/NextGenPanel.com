const mongoose = require('mongoose');

const backupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['completed', 'in-progress', 'failed'], default: 'in-progress' },
  timestamp: { type: Date, default: Date.now },
  size: { type: Number, required: true },
}, { timestamps: true });

const Backup = mongoose.model('Backup', backupSchema);
module.exports = Backup;
