const crypto = require('node:crypto');
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({

    name: String,
    lastname: String,
    username: String,
    hash: String,
    salt: String

}, {

    timestamps: true
});


adminSchema.methods.setPassword = function(password) {

    this.salt = crypto.randomBytes(16).toString('hex');

    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');

}


adminSchema.methods.checkPassword = function(password) {

    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');

    return this.hash === hash;

}


module.exports = mongoose.model('Admins', adminSchema);

