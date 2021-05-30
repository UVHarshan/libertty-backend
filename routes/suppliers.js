const router = require('express').Router();
let Supplier = require('../models/supplier.model');

// Get request to retrieve details
router.route('/').get((req, res) => {
  Supplier.find()
    .then(suppliers => res.json(suppliers))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Post request to add details
router.route('/add').post((req, res) => {
  const supplierId = Number(req.body.supplierId);
  const name = req.body.name;
  const mobileNo = req.body.mobileNo;
  const email = req.body.email;

  const newSuppplier = new Supplier({
    supplierId,
    name,
    mobileNo,
    email
  });

  newSuppplier.save()
    .then(() => res.json('Supplier added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;