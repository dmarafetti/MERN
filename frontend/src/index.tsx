import './css/styles.scss';
import React from 'react';
import {bootstrap} from './app/commons/react';
import {createRoot} from 'react-dom/client';
import axios from "axios";
import App from './app';


bootstrap('mern-frontend-app', {attrs: []}, (node, applicationParams, env) => {


    //
    // configure axios
    //

    axios.defaults.baseURL = `http://${env.get('NODE_DOCKER_HOST')}:${env.get('NODE_DOCKER_PORT')}/api/v1`;



    //
    // bootstrap react app
    //

    createRoot(node).render(
        <App />
    );

});
