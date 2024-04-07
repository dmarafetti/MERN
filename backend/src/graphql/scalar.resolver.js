const {GraphQLScalarType} = require("graphql/type");

const resolvers = {

    Date: new GraphQLScalarType({

        name: 'Date',
        description: 'Custom scalar date type',

        /**
         * from the client
         */
        parseValue (value = '') {

            return new Date(value);
        },

        /**
         * to the client
         */
        serialize (value) {

            return value;
        }
    })


}

module.exports = resolvers;
