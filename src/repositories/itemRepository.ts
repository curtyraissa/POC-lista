import connection from '../database/database';

const itemRepository = {

    // Cria um novo item na lista de compras
  async create(item: { nome: string; status: string }) {
    const query = 'INSERT INTO shopping_list (nome, status) VALUES ($1, $2) RETURNING *';
    const values = [item.nome, item.status];

    const result = await connection.query(query, values);
    return result.rows[0];
  },

  // Exclui um item da lista de compras
  async delete(itemId: string) {
    const query = 'DELETE FROM shopping_list WHERE id = $1';
    const values = [itemId];

    await connection.query(query, values);
  },

  // Obtém todos os itens da lista de compras
  async getAll() {
    const query = 'SELECT * FROM shopping_list';

    const result = await connection.query(query);
    return result.rows;
  },

// Atualiza o status de um item na lista de compras
  async updateStatus(itemId: string, status: string) {
    const query = 'UPDATE shopping_list SET status = $1 WHERE id = $2 RETURNING *';
    const values = [status, itemId];

    const result = await connection.query(query, values);
    return result.rows[0];
  }
};

export default itemRepository;

