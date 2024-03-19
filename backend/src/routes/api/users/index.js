const express = require('express')
const User = require('../../../models/user');

const router = express.Router();




router.get('/', async (request, response) => {

    let users = await User.find({}).exec();

    response.json(users);

});

router.get('/:id', async (request, response) => {

    let users = await User.findById(request.params.id).exec();

    response.json(users);

});


router.post('/', async (request, response) => {

    let theUser = new User(request.body);

    theUser = await theUser.save();

    response.status(201).send(theUser);

});


router.patch('/:id', (request, response) => {



});


router.delete('/:id', (request, response) => {

    response.status(204).end();

});


module.exports = router;
