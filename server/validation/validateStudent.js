const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';


  if (!Validator.isLength(data.name, { min: 2 })) {
    errors.name = 'name must be at least 2 characters';
  }
 

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }
  
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
