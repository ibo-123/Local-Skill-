const mongoose = require('mongoose');

const freelancerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bio: { type: String },
  skills: [{ type: String }],
  hourlyRate: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Freelancer', freelancerSchema);