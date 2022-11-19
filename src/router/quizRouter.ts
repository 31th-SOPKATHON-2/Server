import { Router } from 'express';
import { quizController } from '../controller';

const router: Router = Router();

router.get('/', quizController.getQuiz);
export default router;
