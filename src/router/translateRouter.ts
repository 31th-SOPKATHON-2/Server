import { Router } from 'express';
import { translateController } from '../controller';

const router: Router = Router();

router.get('/', translateController.translate);

export default router;
