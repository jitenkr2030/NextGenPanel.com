const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  ticketNumber: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  issue: { type: String, required: true },
  status: { type: String, enum: ['open', 'closed', 'pending'], default: 'open' },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

ticketSchema.methods.updateStatus = function(status) {
  this.status = status;
  this.updated_at = Date.now();
  return this.save();
};

ticketSchema.methods.updatePriority = function(priority) {
  this.priority = priority;
  this.updated_at = Date.now();
  return this.save();
};

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;

