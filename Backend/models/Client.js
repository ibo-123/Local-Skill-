const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  company: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Client', clientSchema);