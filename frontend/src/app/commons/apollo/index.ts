import {createHttpLink} from "@apollo/client";

export const httpLink = createHttpLink({uri: 'https://magento.test/graphql'});

