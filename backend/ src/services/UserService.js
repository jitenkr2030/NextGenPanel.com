// src/services/UserService.js
const User = require('../models/User');

class UserService {
    async createUser(userData) {
        const user = new User(userData);
        return user.save();
    }

    async getUserById(id) {
        return User.findById(id);
    }

    async updateUser(id, userData) {
        return User.findByIdAndUpdate(id, userData, { new: true });
    }

    async deleteUser(id) {
        return User.findByIdAndDelete(id);
    }

    async getAllUsers() {
        return User.find();
    }
}

module.exports = new UserService();
