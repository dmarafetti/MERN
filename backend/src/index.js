const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes');


const {
  NODE_DOCKER_PORT,
  MONGODB_DOCKER_HOST,
  MONGODB_DOCKER_PORT,
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_DATABASE,
} = process.env;


(async function bootstrap() {

    // Setup express.js app

    const app = express();


    app.get('/', async (request, response) => {

      response.send('backend alive!');

    });


    // API routing

    app.use('/api/v1', apiRoutes);


    // Start db

    await mongoose.connect(`mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_DOCKER_HOST}:${MONGODB_DOCKER_PORT}/${MONGODB_DATABASE}?authSource=admin`)




    // Bootstrap web server

    const port = NODE_DOCKER_PORT || 3000;

    app.listen(port, () => {

      console.log(`Backend listening on port ${port}`)

    });




})();








