const User = require('../models/User');
const Freelancer = require('../models/Freelancer');
const Client = require('../models/Client');

exports.getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    let profile = null;
    if (user.role === 'freelancer') {
      profile = await Freelancer.findOne({ user: user._id });
    } else if (user.role === 'client') {
      profile = await Client.findOne({ user: user._id });
    }

    res.json({ user, profile });
  } catch (error) {
    next(error);
  }
};

exports.updateUserProfile = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(req.user.id, { name, email }, { new: true }).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.updateFreelancerProfile = async (req, res, next) => {
  try {
    let freelancer = await Freelancer.findOne({ user: req.user.id });
    if (!freelancer) {
      freelancer = new Freelancer({ user: req.user.id });
    }
    const { bio, hourlyRate, skills } = req.body;
    freelancer.bio = bio;
    freelancer.hourlyRate = hourlyRate;
    freelancer.skills = skills;
    await freelancer.save();
    res.json(freelancer);
  } catch (error) {
    next(error);
  }
};

exports.updateClientProfile = async (req, res, next) => {
  try {
    let client = await Client.findOne({ user: req.user.id });
    if (!client) {
      client = new Client({ user: req.user.id });
    }
    const { company } = req.body;
    client.company = company;
    await client.save();
    res.json(client);
  } catch (error) {
    next(error);
  }
};

exports.getFreelancers = async (req, res, next) => {
  try {
    const freelancers = await Freelancer.find()
      .populate('user', 'name email');
    res.json(freelancers);
  } catch (error) {
    next(error);
  }
};
