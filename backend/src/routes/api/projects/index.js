const express = require('express')
const Project = require('../../../models/project');

const router = express.Router();




router.get('/', async (request, response) => {

    let projects = await Project.find({}).exec();

    response.json(projects);

});

router.get('/:id', async (request, response) => {

    let project = await Project.findById(request.params.id).exec();

    response.json(project);

});


router.post('/', async (request, response) => {

    let theProject = new Project(request.body);

    theProject = await theProject.save();

    response.status(201).send(theProject);

});


router.patch('/:id', (request, response) => {



});


router.delete('/:id', async (request, response) => {

    await Project.deleteOne({_id: request.params.id});

    response.status(204).end();

});


module.exports = router;
