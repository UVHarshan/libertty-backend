const router = require('express').Router();
let Customer = require('../models/customer.model');

// Get request to retrieve admin details
router.route('/').get((req, res) => {
  Customer.find()
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Post request to add admin details
router.route('/add').post((req, res) => {
  const customerId = Number(req.body.customerId);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const homeAddress = req.body.homeAddress;

  const newCustomer = new Customer({
    customerId,
    firstName,
    lastName,
    username,
    password,
    email,
    homeAddress,
  });

  newCustomer.save()
    .then(() => res.json('Customer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;