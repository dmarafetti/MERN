const path = require('path');
const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const { createHandler } = require("graphql-http/lib/use/express");
const {buildGraphQLSchema} = require('./graphql');
const apiRoutes = require('./routes');
const {ruruHTML} = require("ruru/server");


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


    // json content type handling

    app.use(express.json());


    // configure CORS

    app.use(cors({

        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        optionsSuccessStatus: 204

    }));


    app.get('/', async (request, response) => {

      response.send('backend alive!');

    });


    // GraphQL routing

    app.all('/graphql', createHandler({schema: buildGraphQLSchema()}))

    // Serve the GraphiQL IDE.
    app.get("/playground", (_req, res) => {

        res.type("html");

        res.end(ruruHTML({ endpoint: "/graphql" }));

    });

    // API routing

    app.use('/v1/api', apiRoutes);


    // Start db

    let mongo_user = MONGODB_USER || 'root',
        mongo_pass = MONGODB_PASSWORD || 'toor',
        mongo_host = MONGODB_DOCKER_HOST || 'localhost',
        mongo_port = MONGODB_DOCKER_PORT || '27017',
        mongo_db = MONGODB_DATABASE || 'mern';

    await mongoose.connect(`mongodb://${mongo_user}:${mongo_pass}@${mongo_host}:${mongo_port}/${mongo_db}?authSource=admin`)





    // Bootstrap web server

    const port = NODE_DOCKER_PORT || 3000;

    app.listen(port, () => {

      console.log(`Backend listening on port ${port}`)

    });


    // Graceful shutdown
    process.once('SIGHUP', () => {

        console.log();

    });


})();








