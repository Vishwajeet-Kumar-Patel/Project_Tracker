// filepath: /c:/Users/vishw/OneDrive/Desktop/Project Tracking System/project-assignment-module/backend/utils/generateToken.js
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = generateToken;