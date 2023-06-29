import db from '../database/database';

const itemRepository = {

    // Cria um novo item na lista de compras
  async create(item: { nome: string; status: string }) {
    const query = 'INSERT INTO shopping_list (nome, status) VALUES ($1, $2) RETURNING *';
    const values = [item.nome, item.status];

    try {
      const result = await db.connection.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw new Error('Erro ao criar item na lista de compras');
    }
  },

  // Exclui um item da lista de compras
  async delete(itemId: string) {
    const query = 'DELETE FROM shopping_list WHERE id = $1';
    const values = [itemId];

    try {
      await db.connection.query(query, values);
    } catch (error) {
      throw new Error('Erro ao excluir item da lista de compras');
    }
  },

  // Obtém todos os itens da lista de compras
  async getAll() {
    const query = 'SELECT * FROM shopping_list';

    try {
      const result = await db.connection.query(query);
      return result.rows;
    } catch (error) {
      throw new Error('Erro ao obter itens da lista de compras');
    }
  },

// Atualiza o status de um item na lista de compras
  async updateStatus(itemId: string, status: string) {
    const query = 'UPDATE shopping_list SET status = $1 WHERE id = $2 RETURNING *';
    const values = [status, itemId];

    try {
      const result = await db.connection.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw new Error('Erro ao atualizar status do item');
    }
  }
};

export default itemRepository;

