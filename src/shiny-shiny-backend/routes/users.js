const express = require("express");
const { User, validateUser } = require("../models/user");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find().sort("name");
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const user = User.findById(req.params.id);

  if (!user) return res.status(404).send("User with such id not found");

  req.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = new User({
    name: req.body.name,
    email: req.body.email,
  });

  user = await user.save();
  res.send(user);
});

router.put("/:id", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    { new: true }
  );

  if (!user) return res.status(404).send("Template with such id not found");

  res.send(user);
});

router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) return res.status(404).send("User with such id not found");

  res.send(user);
});

module.exports = router;
