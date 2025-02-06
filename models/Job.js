const mongoose = require('mongoose');

const jobSchema = mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      required: true, 
      ref: 'User' // Reference to the User model
    },
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    salary: { type: Number },
    status: { 
      type: String, 
      enum: ['Pending', 'Interview', 'Rejected', 'Accepted'], 
      default: 'Pending' 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', jobSchema);
