const router = require('express').Router();
let Product = require('../models/product.model');

// Get request to retrieve details
router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Post request to add details
router.route('/add').post((req, res) => {
  const productId = Number(req.body.productId);
  const categoryId  = Number(req.body.categoryId);
  const brand = req.body.brand;
  const item = req.body.item;
  const quantity = Number(req.body.quantity);
  const expiryDate = Date(req.body.expiryDate);
  const price = req.body.price;

  const newProduct = new Product({
    productId,
    categoryId,
    brand,
    item,
    quantity,
    expiryDate,
    price,
  });

  newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;