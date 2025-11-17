const mongoose = require('mongoose');
const { init } = require('./app');
const Schema = mongoose.Schema;

const superadminSchema = new Schema({
    id: Number,
    name: String,
    email: String,
    password: String
})

const SuperAdmin = mongoose.model('SuperAdmin', superadminSchema,'superadmin');

module.exports = SuperAdmin;