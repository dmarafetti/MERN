const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { buildSchema } = require("graphql");
const path = require("path");

//
// Loads type definitions (DocumentNode)
//

const typeDefs = loadFilesSync(path.join(__dirname, '**/*.graphql'));

//
// Loads resolvers (GraphQL Document)
//

const resolvers = loadFilesSync(path.join(__dirname, '**/*.resolver.js'))


/**
 * Build GraphQL schema
 *
 */
function buildGraphQLSchema () {

    return makeExecutableSchema({typeDefs, resolvers});
}


module.exports = {buildGraphQLSchema};
