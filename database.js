const mongoose = require('mongoose')
const dotenv  = require('dotenv');


if (process.env.NODE_ENV !== 'production') {

    dotenv.config();
}

mongoose.connect(process.env.url, {useUnifiedTopology: true, useNewUrlParser: true})

var db = mongoose.connection;

db.on('connected', ()=>{
    console.log('Mongo Db Connection Successfull')
})

db.on('error', ()=>{
    console.log('Mongo Db Connection Failed')
})

module.exports = mongoose;