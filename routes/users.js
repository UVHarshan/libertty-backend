const router = require('express').Router();
let User = require('../models/user.model');

// Get request to retrieve admin details
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Post request to add admin details
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const userType = req.body.userType;

  const newUser = new User({
    name,
    username,
    password,
    userType
  });

  newUser.save()
    .then(() => res.json('New User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Get Request to retrieve some data corresponding to a specific ID
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Delete Request to delete records corresponding to a specific ID
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Post Request to update records corresponding to a specific ID
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then( user => {
      user.name = req.body.name;
      user.username = req.body.username;
      user.password = req.body.password;
      user.userType = req.body.userType;

      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});








module.exports = router;