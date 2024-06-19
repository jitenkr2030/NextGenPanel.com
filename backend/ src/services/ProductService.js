// src/services/ProductService.js
const Product = require('../models/Product');

class ProductService {
    async createProduct(productData) {
        const product = new Product(productData);
        return product.save();
    }

    async getProductById(id) {
        return Product.findById(id);
    }

    async updateProduct(id, productData) {
        return Product.findByIdAndUpdate(id, productData, { new: true });
    }

    async deleteProduct(id) {
        return Product.findByIdAndDelete(id);
    }

    async getAllProducts() {
        return Product.find();
    }
}

module.exports = new ProductService();
