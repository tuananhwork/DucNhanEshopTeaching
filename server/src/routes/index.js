import { Router } from 'express';
import { handleHome } from '../controllers/handleHome.controller.js';

const router = Router();

router.get('/', handleHome);

export default router;
