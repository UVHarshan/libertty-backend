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
  const categoryId= Number(req.body.categoryId);
  const name = req.body.name;

  // Creating a new instance 
  const newCategory = new ProdCategory({
    categoryId,
    name,
  });

  newCategory.save()
    .then(() => res.json('Category added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;