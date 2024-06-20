const mongoose = require('mongoose');

const ecommerceSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  inventoryCount: { type: Number, required: true },
  status: { type: String, enum: ['available', 'out of stock'], default: 'available' },
}, { timestamps: true });

const Ecommerce = mongoose.model('Ecommerce', ecommerceSchema);
module.exports = Ecommerce;
