const Joi = require('@hapi/joi');

const postSchema = Joi.object({
  longURL: Joi.string().required(),
  shortURL: Joi.string().max(8),
});

module.exports=postSchema;