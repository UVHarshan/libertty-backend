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
  // const categoryId  = Number(req.body.categoryId);
  const brand = req.body.brand;
  const item = req.body.item;
  const category = req.body.category;
  const price = req.body.price;
  const quantity = req.body.quantity;
  // const expiryDate = Date(req.body.expiryDate);  

  const newProduct = new Product({
    brand,
    item,
    category,
    price,
    quantity  
  });

  newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Get Request to retrieve some data corresponding to a specific ID
router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Delete Request to delete records corresponding to a specific ID
router.route('/:id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Post Request to update records corresponding to a specific ID
router.route('/update/:id').post((req, res) => {
  Product.findById(req.params.id)
    .then( product => {
      product.brand = req.body.brand ;
      product.item = req.body.item;
      product.category = req.body.category;
      product.price = req.body.price;
      product.quantity = req.body.quantity;

      product.save()
        .then(() => res.json('Product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});






module.exports = router;