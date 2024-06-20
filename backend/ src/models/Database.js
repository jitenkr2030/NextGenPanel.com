const mongoose = require('mongoose');

const databaseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['sql', 'nosql'], required: true },
  status: { type: String, enum: ['connected', 'disconnected'], default: 'disconnected' },
}, { timestamps: true });

const Database = mongoose.model('Database', databaseSchema);
module.exports = Database;
