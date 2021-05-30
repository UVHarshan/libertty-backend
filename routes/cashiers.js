const router = require('express').Router();
let Cashier = require('../models/cashier.model');

// Get request to retrieve admin details
router.route('/').get((req, res) => {
  Cashier.find()
    .then(cashiers => res.json(cashiers))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Post request to add admin details
router.route('/add').post((req, res) => {
  const cashierId = Number(req.body.cashierId);
  const username = req.body.username;
  const password = req.body.password;

  const newCashier = new Cashier({
    cashierId,
    username,
    password,
  });

  newCashier.save()
    .then(() => res.json('Cashier added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;