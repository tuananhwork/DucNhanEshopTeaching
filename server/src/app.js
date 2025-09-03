import express from 'express';
import morgan from 'morgan';

import apiRouter from './routes/index.js';
import productsRouter from './routes/products.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api', apiRouter);
app.use('/products', productsRouter);

export default app;
