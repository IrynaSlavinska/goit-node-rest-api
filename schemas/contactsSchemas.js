import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "Missing required name field" }),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({ "any.required": "Missing required email field" }),

  phone: Joi.string().required().messages({
    "any.required": "Missing required phone field",
  }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
});
