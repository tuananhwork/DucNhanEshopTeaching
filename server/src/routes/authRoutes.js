import { Router } from 'express';
import User from '../models/User.model.js';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({ message: 'User registered successfully.', token });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'An unexpected error occurred during registration.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({ message: 'User login successfully.', token });
  } catch (error) {
    res.status(500).json({ message: 'An unexpected error occurred during login.' });
  }
});

export default router;
