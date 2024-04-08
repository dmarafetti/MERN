const User = require("../models/user");


const resolvers = {

    Mutation: {

        async createUser(obj, args, context, info) {

            const {name, lastname, jobTitle, country, city, avatar} = args.data;

            let theUser = new User({name, lastname, jobTitle, country, city, avatar});

            return await theUser.save();

        },

        async createProject(obj, args, context, info) {

            console.log(obj, args);

        }


    }

}

module.exports = resolvers;
