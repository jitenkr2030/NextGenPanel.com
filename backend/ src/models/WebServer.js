const mongoose = require('mongoose');

const webServerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
  ipAddress: { type: String, required: true },
}, { timestamps: true });

const WebServer = mongoose.model('WebServer', webServerSchema);
module.exports = WebServer;
