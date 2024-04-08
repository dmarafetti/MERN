const User= require('../models/user');
const Project= require('../models/project');


const resolvers = {

    Query: {

        async me(obj, args, context, info) {

            return {};
        },


        /**
         * resolve users
         */
        async users(obj, args, context, info) {

            return await User.find({}).exec();
        },

        /**
         * resolve projects.
         */
        async projects(obj, args, context, info) {

            let projectName = '';

            if(args?.name)  {

                projectName = args.name;

                return await Project.find().regex('name', new RegExp(`${projectName}`, 'i')).exec();

            } else {

                return await Project.find().exec();
            }

        }

    },

    User: { // matches with User type

            async projects(obj, args, context, info) {

                return await Project.find({owner: obj._id}).exec();

            }

    },

    Project: { // matches with Project type

        async owner(obj, args, context, info) {

            return await User.findById(obj.owner);

        }

    }


};

module.exports = resolvers
