const express = require('express');
const port = 8000;
const app = express();
const passportJWT = require('./config/passport-jwt-strategy');
const db = require('./config/mongoose')
app.use('/', require('./routes'));


app.listen(port, function(err){
    if(err){
        console.log('Error while creating the server', err);
    }
    console.log('Server is running at port ==> ', port);
})