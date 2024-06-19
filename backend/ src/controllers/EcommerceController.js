// src/controllers/EcommerceController.js
const EcommerceService = require('../services/EcommerceService');

class EcommerceController {
    async createProduct(req, res) {
        try {
            const product = await EcommerceService.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateProduct(req, res) {
        try {
            const product = await EcommerceService.updateProduct(req.params.id, req.body);
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteProduct(req, res) {
        try {
            await EcommerceService.deleteProduct(req.params.id);
            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getProducts(req, res) {
        try {
            const products = await EcommerceService.getProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new EcommerceController();
