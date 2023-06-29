import express from 'express';
import itemController from '../controllers/itemController';
import validateSchema from '../middleware/validationMiddleware';

const router = express.Router();

router.post('/lista', validateSchema, itemController.create);
router.delete('/lista/:id', itemController.delete);
router.get('/lista', itemController.getAll);
router.put('/lista/:id', itemController.updateStatus);

export default router;