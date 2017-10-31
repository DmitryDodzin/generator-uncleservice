
import { Router } from 'express';

const router = Router();

router.get('/foo', (req, res) => res.send('bar'));

export default router;