import { Router } from 'express';
import userRouter from './quizRouter';

const router: Router = Router();

router.use('/quiz', userRouter);

export default router;
