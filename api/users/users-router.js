// do not make changes to this file
const router = require('express').Router();
const Users = require('../users/user-model');

router.get('/', async (req, res) => {
    console.log("users")
    const users = await Users.find();
  res.status(200).json(users);
});

module.exports = router;
