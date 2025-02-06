const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobController');

const router = express.Router();

// Protect all job routes
router.route('/')
  .get(protect, getJobs)    // Get all jobs for logged-in user
  .post(protect, createJob); // Create a new job

router.route('/:id')
  .put(protect, updateJob)   // Update a job
  .delete(protect, deleteJob); // Delete a job

module.exports = router;
