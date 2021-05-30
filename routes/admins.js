const router = require('express').Router();
let Admin = require('../models/admin.model');

// Get request to retrieve admin details
router.route('/').get((req, res) => {
  Admin.find()
    .then(admins => res.json(admins))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Post request to add admin details
router.route('/add').post((req, res) => {
  const adminId = Number(req.body.adminId);
  const username = req.body.username;
  const password = req.body.password;

  const newAdmin = new Admin({
    adminId,
    username,
    password,
  });

  newAdmin.save()
    .then(() => res.json('Admin added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;