const express = require('express')
const users = require('./api/users');
const projects = require('./api/projects');

const router = express.Router();

// register resource's endpoints

router.use('/users', users);

router.use('/projects', projects);



module.exports = router;
