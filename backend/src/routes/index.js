const express = require('express')
const users = require('./api/users');
const projects = require('./api/projects');
const auth = require('./api/auth');

const router = express.Router();

// register resource's endpoints

router.use('/users', users);

router.use('/projects', projects);

router.use('/auth', auth);




module.exports = router;
