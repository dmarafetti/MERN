const express = require('express');
const mongoose = require("mongoose");
const User = require('../../../models/user');
const Project = require('../../../models/project');

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


router.delete('/:id', async (request, response) => {

    await User.deleteOne({_id: request.params.id});

    response.status(204).end();

});


router.get('/:id/projects', async (request, response) => {

    const objectId = new mongoose.Types.ObjectId(request.params.id);  //.SchemaTypes.ObjectId(request.params.id);

    try {

        let projects = await Project.find({owner: objectId}).exec();

        response.json(projects);

    } catch (ex) {

        response.status(500).send(ex.message);

    }


});

module.exports = router;
