const Joi = require('joi');

const id = Joi.string().uuid();

const getProductProductSchema = Joi.object({
  id: id.required(),
});

module.exports = getProductProductSchema;
