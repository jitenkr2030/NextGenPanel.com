const mongoose = require('mongoose');

const domainSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  registrationDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
}, { timestamps: true });

const Domain = mongoose.model('Domain', domainSchema);
module.exports = Domain;
