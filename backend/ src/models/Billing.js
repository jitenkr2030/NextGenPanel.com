const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'paid', 'overdue'], default: 'pending' },
  dueDate: { type: Date, required: true },
}, { timestamps: true });

const Billing = mongoose.model('Billing', billingSchema);
module.exports = Billing;
