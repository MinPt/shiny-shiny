const mongoose = require("mongoose");
const Joi = require("joi");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: { type: String, required: true, minlength: 4, maxlength: 25 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlenght: 4, maxlength: 1024 },
  })
);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().required().min(4).max(25),
    email: Joi.string().required().max(255).email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
