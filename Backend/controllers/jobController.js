const Job = require('../models/Job');
const Client = require('../models/Client');

exports.createJob = async (req, res, next) => {
  try {
    if (req.user.role !== 'client') {
      return res.status(403).json({ message: 'Only clients can post jobs' });
    }
    const client = await Client.findOne({ user: req.user.id });
    if (!client) return res.status(404).json({ message: 'Client profile not found' });
    const { title, description, budget, deadline } = req.body;
    const job = new Job({
      client: client._id,
      title,
      description,
      budget,
      deadline
    });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    next(error);
  }
};

exports.getJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find({ status: 'open' })
      .sort({ createdAt: -1 })
      .populate({ path: 'client', populate: { path: 'user', select: 'name' } });
    res.json(jobs);
  } catch (error) {
    next(error);
  }
};

exports.getUserJobs = async (req, res, next) => {
  try {
    const client = await Client.findOne({ user: req.user.id });
    if (!client) return res.status(404).json({ message: 'Client profile not found' });
    const jobs = await Job.find({ client: client._id })
      .sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    next(error);
  }
};

exports.getJobById = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id)
      .populate({ path: 'client', populate: { path: 'user', select: 'name' } });
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (error) {
    next(error);
  }
};
