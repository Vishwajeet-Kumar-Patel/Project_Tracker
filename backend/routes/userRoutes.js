// filepath: /c:/Users/vishw/OneDrive/Desktop/Project Tracking System/project-assignment-module/backend/routes/userRoutes.js
const express = require('express');
const { authUser, registerUser, logoutUser, deleteUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/login', authUser);
router.post('/logout', logoutUser);
router.post('/', registerUser);
router.delete('/delete', protect, deleteUser);

module.exports = router;