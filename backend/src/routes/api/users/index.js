const express = require('express')

const router = express.Router();


let clients = [

    {id: 1, nombre: 'Juan', document: '12345'},
    {id: 2, nombre: 'Agustin', document: '435324'},
    {id: 3, nombre: 'Catalina', document: '3333333'},
    {id: 4, nombre: 'Fabian', document: '66666'},
    {id: 5, nombre: 'Clara', document: '88888'}

];



router.get('/', (request, response) => {

    response.json(clients);

});


router.post('/', (request, response) => {

    clients.push(request.body);

    response.status(201).send(request.body);

});


router.patch('/:id', (request, response) => {



});


router.delete('/:id', (request, response) => {

    const idClient = request.params.id;

    clients = clients.filter(cliente => (cliente.id != idClient));

    response.status(204).end();

});


module.exports = router;
