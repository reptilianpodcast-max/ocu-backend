const mongoose = require('mongoose');
const { init } = require('./app');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    id: Number,
    name: String,
    email: String,
    password: String
})

const Admin = mongoose.model('Admin', adminSchema,'admin');

module.exports = Admin;