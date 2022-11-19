import { Router } from 'express';
import quizRouter from './quizRouter';
import translateRouter from './translateRouter';

const router: Router = Router();

router.use('/translate', translateRouter);
router.use('/quiz', quizRouter);

export default router;
