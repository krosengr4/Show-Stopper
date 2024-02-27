//! This file contains the connection to the database

//Import mongoose db, connect to db, then export
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/show-stopper');

module.exports = mongoose.connection;