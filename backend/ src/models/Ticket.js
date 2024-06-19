// src/models/Ticket.js
const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['open', 'closed'], default: 'open' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', TicketSchema);
