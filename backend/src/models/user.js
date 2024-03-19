const mongoose = require("mongoose");
const Project = require("./project");

const userSchema = new mongoose.Schema({

    name: String,
    lastname: String,
    createAt: Date,
    jobTitle: String,
    country: String,
    city: String,
    projects: [Project.schema]

});

module.exports = mongoose.model('User', userSchema);

