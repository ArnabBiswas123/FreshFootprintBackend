const Joi = require('joi');

const approverValidate=Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    mobile: Joi.number().min(1000000000).max(9999999999).required().messages({
        'number.base': 'Mobile must be a numeric value',
        'number.integer': 'Mobile must be an integer',
        'number.min': 'Mobile must be at least 10 digits',
        'number.max': 'Mobile cannot exceed 10 digits',
        'any.required': 'Mobile is required',
      }),
      region: Joi.string().valid('india', 'switzerland').required()
  });
module.exports=approverValidate