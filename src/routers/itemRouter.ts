import express from 'express';
import itemController from '../controllers/itemController';
import validateSchema from '../middleware/validationMiddleware';

const router = express.Router();

// Rota para criar um novo item
router.post('/lista', validateSchema, itemController.create);
// Rota para excluir um item
router.delete('/lista/:id', itemController.delete);
// Rota para obter todos os itens
router.get('/lista', itemController.getAll);
// Rota para atualizar o status de um item
router.put('/lista/:id', itemController.updateStatus);

export default router;