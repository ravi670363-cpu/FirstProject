const express = require('express');
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

// Get own profile
router.get('/me', authMiddleware, profileController.getProfile);

// Get user profile by ID
router.get('/:id', authMiddleware, profileController.getProfile);

// Update profile
router.put('/update', authMiddleware, profileController.updateProfile);

// Upload profile picture
router.post('/upload', authMiddleware, upload.single('profilePicture'), profileController.uploadProfilePicture);

// Search users
router.get('/search/users', authMiddleware, profileController.searchUsers);

// Get featured profiles
router.get('/featured/profiles', profileController.getFeaturedProfiles);

module.exports = router;
