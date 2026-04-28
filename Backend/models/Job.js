const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  budget: { type: Number, required: true, min: 0 },
  deadline: { type: Date },
  status: { type: String, enum: ['open', 'in_progress', 'completed'], default: 'open' },
  createdAt: { type: Date, default: Date.now }
});

jobSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model('Job', jobSchema);