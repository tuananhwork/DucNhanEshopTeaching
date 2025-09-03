import { Router } from 'express';
import { handleHome } from '../controllers/handleHome.controller.js';

const router = Router();

// CRUD: Create - Read - Update - Delete

router.get('/', handleHome);

router.post('/', (req, res) => {
  res.json({
    status: 'Success',
    message: 'Got a POST request',
  });
});

router.put('/user', (req, res) => {
  res.json({
    status: 'Success',
    message: 'Got a PUT request at /user',
  });
});

router.delete('/user', (req, res) => {
  res.json({
    status: 'Success',
    message: 'Got a DELETE request at /user',
  });
});

export default router;
