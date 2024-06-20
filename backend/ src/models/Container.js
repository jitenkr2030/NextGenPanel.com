const mongoose = require('mongoose');

const containerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  status: { type: String, enum: ['running', 'stopped'], default: 'stopped' },
  created_at: { type: Date, default: Date.now },
}, { timestamps: true });

const Container = mongoose.model('Container', containerSchema);
module.exports = Container;
