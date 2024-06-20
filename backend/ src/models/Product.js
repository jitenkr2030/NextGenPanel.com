const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  inventoryCount: { type: Number, required: true },
  status: { type: String, enum: ['available', 'out of stock'], default: 'available' },
}, { timestamps: true });

productSchema.methods.updateInventory = function(count) {
  this.inventoryCount = count;
  this.status = count > 0 ? 'available' : 'out of stock';
  return this.save();
};

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

