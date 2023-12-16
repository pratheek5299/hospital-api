const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/hospital_api');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to mongodb'));

db.once('open', function(){
    console.log('Connected to database ==> MongoDb');
});

module.exports = db;