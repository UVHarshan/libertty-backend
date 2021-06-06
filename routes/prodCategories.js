// Import Statements
const router = require('express').Router();
let ProdCategory = require('../models/productCategory.model');

// Get request to retrieve details
router.route('/').get( (req, res) => {
  ProdCategory.find()
    .then(categories => res.json(categories))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Post request to add details
router.route('/add').post( (req, res) => {
  const category = req.body.category;

  // Creating a new instance 
  const newCategory = new ProdCategory({
    category
  });

  newCategory.save()
    .then(() => res.json('Category added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Get Request to retrieve some data corresponding to a specific ID
router.route('/:id').get((req, res) => {
  ProdCategory.findById(req.params.id)
    .then(prodCategory => res.json(prodCategory))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Request to delete records corresponding to a specific ID
router.route('/:id').delete((req, res) => {
  ProdCategory.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product Category deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});













module.exports = router;