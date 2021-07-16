const express = require("express");
const { Product, validateProduct } = require("../models/product");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find().sort("name");
  res.send(products);
});

router.get("/:id", async (req, res) => {
  const product = Product.findById(req.params.id);

  if (!product) return res.status(404).send("User with such id not found");

  req.send(product);
});

router.post("/", async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });

  product = await product.save();
  res.send(product);
});

router.put("/:id", async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    },
    { new: true }
  );

  if (!product) return res.status(404).send("Template with such id not found");

  res.send(product);
});

router.delete("/:id", async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) return res.status(404).send("User with such id not found");

  res.send(product);
});

module.exports = router;
