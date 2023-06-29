import { Request, Response } from 'express';
import itemRepository from '../repositories/itemRepository';

const itemController = {
  
    // Cria um novo item na lista de compras
  async create(req: Request, res: Response) {
    const { nome, status } = req.body;

    try {
      const item = await itemRepository.create({ nome, status });
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar item na lista de compras' });
    }
  },

  // Exclui um item da lista de compras
  async delete(req: Request, res: Response) {
    const itemId = req.params.id;

    try {
      await itemRepository.delete(itemId);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir item da lista de compras' });
    }
  },

  // Obtém todos os itens da lista de compras
  async getAll(req: Request, res: Response) {
    try {
      const items = await itemRepository.getAll();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter itens da lista de compras' });
    }
  },

  // Atualiza o status de um item na lista de compras
  async updateStatus(req: Request, res: Response) {
    const itemId = req.params.id;
    const { status } = req.body;

    try {
      const item = await itemRepository.updateStatus(itemId, status);
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar status do item' });
    }
  }
};

export default itemController;
