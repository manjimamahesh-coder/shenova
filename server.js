const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// ── User Schema ──
const userSchema = new mongoose.Schema({
  firstName:  { type: String, required: true },
  lastName:   { type: String, default: '' },
  email:      { type: String, required: true, unique: true, lowercase: true },
  phone:      { type: String, default: '' },
  password:   { type: String, required: true },
  createdAt:  { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

// ── Connect to MongoDB ──
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB error:', err));

// ── SIGNUP Route ──
app.post('/api/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    // Check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 12);

    // Save user
    const user = await User.create({
      firstName, lastName, email, phone, password: hashed
    });

    // Create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      message: 'Account created successfully!',
      token,
      user: { firstName: user.firstName, email: user.email }
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// ── LOGIN Route ──
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({
      message: 'Login successful!',
      token,
      user: { firstName: user.firstName, email: user.email }
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// ── Start Server ──
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));