import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    status: 'Success',
    message: 'Products',
  });
});

router.get('/:id', (req, res) => {
  res.json({
    status: 'Success',
    message: 'Product' + req.params.id,
  });
});

export default router;
