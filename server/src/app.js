import express from 'express';
import morgan from 'morgan';

import apiRoutes from './routes/index.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

export default app;
