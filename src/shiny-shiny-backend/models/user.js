const mongoose = require("mongoose");
const Joi = require("joi");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: { type: String, required: true, minlength: 4, maxlength: 25 },
    email: { type: String, required: true },
  })
);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().required().min(4).max(25),
    email: Joi.string().required().email(),
  });

  return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;
