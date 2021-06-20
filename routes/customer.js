const router = require('express').Router();
let Customer = require('../models/customer.model');

// Get request to retrieve customer details
router.route('/').get((req, res) => {
  Customer.find()
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Post request to add customer details
router.route('/add').post((req, res) => {  
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const password = req.body.password;

  // Creating a new customer object
  const newCustomer = new Customer({    
    firstName,
    lastName,
    email,
    mobile,
    password
  });

  // saving the customer in the database
  newCustomer.save()
    .then(() => res.json('Customer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;