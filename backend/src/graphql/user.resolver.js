const Project= require('../models/project');

const resolvers = {

    User: { // matches with User type

        async projects(obj, args, context, info) {

            return await Project.find({owner: obj._id}).exec();

        }

    }


};

module.exports = resolvers;
