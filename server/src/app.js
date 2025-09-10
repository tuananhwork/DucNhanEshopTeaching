import express from 'express';
import morgan from 'morgan';

import apiRoutes from './routes/index.js';
import authRoutes from './routes/authRoutes.js';
import { authenticate, authorize } from './middlewares/auth.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

app.get('/admin', authenticate, authorize(['admin']), (req, res) => {
  res.json({ message: 'Welcome admin dashboard.' });
});

app.get('/profile', authenticate, (req, res) => {
  res.json({ message: 'Welcome profile page.' });
});

export default app;
