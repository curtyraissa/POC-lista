import Joi from 'joi';

const itemSchema = Joi.object({
  nome: Joi.string().required(),
  status: Joi.string().valid('pendente', 'comprado').required()
});

export default itemSchema;
