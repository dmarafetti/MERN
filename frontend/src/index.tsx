import './css/styles.css';
import React from 'react';
import {bootstrap} from './app/commons/react';
import {createRoot} from 'react-dom/client';
import axios from "axios";
import App from './app';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {httpLink} from './app/commons/apollo';
import {Provider as ReduxProvider} from 'react-redux';
import store from './app/store';


bootstrap('mern-frontend-app', {attrs: []}, (node, applicationParams, env) => {


    //
    // configure axios
    //

    axios.defaults.baseURL = `https://${env.get('NODE_DOCKER_HOST')}:${env.get('NODE_DOCKER_PORT')}/api/v1`;


    //
    // graphql client setup
    //

    const apoloClient = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    });


    //
    // bootstrap react app
    //

    createRoot(node).render(
        // <StrictMode>
            <ApolloProvider client={apoloClient}>
                <ReduxProvider store={store}>
                    <App />
                </ReduxProvider>
            </ApolloProvider>
        // </StrictMode>
    );

});
