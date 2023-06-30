import { Request, Response } from 'express';
import itemRepository from '../repositories/itemRepository';
import httpStatus from 'http-status';

const itemController = {
  
    // Cria um novo item na lista de compras
  async create(req: Request, res: Response) {
    const { nome, status } = req.body;
    try {
      const item = await itemRepository.create({ nome, status });
      res.sendStatus(httpStatus.OK);
    } catch (error) {
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  },

  // Exclui um item da lista de compras
  async delete(req: Request, res: Response) {
    const itemId = req.params.id;

    try {
      await itemRepository.delete(itemId);
      res.sendStatus(httpStatus.OK);
    } catch (error) {
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  },

  // Obtém todos os itens da lista de compras
  async getAll(req: Request, res: Response) {
    try {
      const items = await itemRepository.getAll();
      res.status(httpStatus.OK).send(items);
    } catch (error) {
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  },

  // Atualiza o status de um item na lista de compras
  async updateStatus(req: Request, res: Response) {
    const itemId = req.params.id;
    const { status } = req.body;

    try {
      const item = await itemRepository.updateStatus(itemId, status);
      res.status(httpStatus.OK).send(item);
    } catch (error) {
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
};

export default itemController;
