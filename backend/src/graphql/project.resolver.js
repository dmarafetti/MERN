const User= require('../models/user');

const resolvers = {

    Project: { // matches with Project type

        async owner(obj, args, context, info) {

            return await User.findById(obj.owner);

        }

    }


};

module.exports = resolvers;
