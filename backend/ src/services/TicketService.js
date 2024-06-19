// src/services/TicketService.js
const Ticket = require('../models/Ticket');

class TicketService {
    async createTicket(ticketData) {
        const ticket = new Ticket(ticketData);
        return ticket.save();
    }

    async getTicketById(id) {
        return Ticket.findById(id);
    }

    async updateTicket(id, ticketData) {
        return Ticket.findByIdAndUpdate(id, ticketData, { new: true });
    }

    async deleteTicket(id) {
        return Ticket.findByIdAndDelete(id);
    }

    async getAllTickets() {
        return Ticket.find();
    }
}

module.exports = new TicketService();
