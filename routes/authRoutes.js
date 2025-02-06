const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware'); // Import protect middleware

const router = express.Router();

// Debugging Middleware
router.use((req, res, next) => {
  console.log('Raw Body (Middleware):', req.body);
  next();
});

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Private routes (protected by JWT)
router.route('/profile')
  .get(protect, getUserProfile) // View profile
  .put(protect, updateUserProfile); // Update profile

module.exports = router;
