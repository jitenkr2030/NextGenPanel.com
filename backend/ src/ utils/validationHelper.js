const { check, validationResult } = require('express-validator');

const userValidationRules = () => {
  return [
    check('email').isEmail().withMessage('Must be a valid email address'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors
  });
};

module.exports = {
  userValidationRules,
  validate
};
