const mongoose = require("mongoose");
const Project = require("./project");

const userSchema = new mongoose.Schema({

    name: String,
    lastname: String,
    jobTitle: String,
    country: String,
    city: String,
    avatar: String,
    createdAt: Date,
    updatedAt: Date
    //projects: [Project.schema]

}, {

    timestamps: true
});

module.exports = mongoose.model('User', userSchema);

