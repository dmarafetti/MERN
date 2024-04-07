const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

    name: String,
    description: String,
    technology: String,
    price: Number,
    persistance: String,
    owner: mongoose.SchemaTypes.ObjectId

});

module.exports = mongoose.model('Project', projectSchema);

