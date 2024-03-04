const express = require('express')
const users = require('./api/users');

const router = express.Router();

// register resource's endpoints

router.use('/users', users);





module.exports = router;
