const Job = require('../models/Job');

// @desc    Get all jobs for logged-in user
// @route   GET /api/jobs
// @access  Private
const getJobs = async (req, res) => {
  const page = Number(req.query.pageNumber) || 1;
  const pageSize = 10; // Number of jobs per page
  const count = await Job.countDocuments({ user: req.user.id });

  const jobs = await Job.find({ user: req.user.id })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({
    jobs,
    page,
    pages: Math.ceil(count / pageSize),
  });
};


// @desc    Create a new job
// @route   POST /api/jobs
// @access  Private
const createJob = async (req, res) => {
  try {
    const { title, company, location, salary, status } = req.body;

    if (!title || !company) {
      return res.status(400).json({ message: 'Title and company are required' });
    }

    const job = await Job.create({
      user: req.user.id,
      title,
      company,
      location,
      salary,
      status,
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update a job
// @route   PUT /api/jobs/:id
// @access  Private
const updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    if (job.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete a job
// @route   DELETE /api/jobs/:id
// @access  Private
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    if (job.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await job.deleteOne();
    res.json({ message: 'Job removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getJobs, createJob, updateJob, deleteJob };
