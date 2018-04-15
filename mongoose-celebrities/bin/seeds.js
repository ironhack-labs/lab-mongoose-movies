require("dotenv").config();

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const data = require('./dataCelebrities');

const dbURL = process.env.DBURL;

mongoose.connect(dbURL)
.then(() =>{
    console.log(`Connected to db ${dbURL}`);
    Celebrity.collection.drop();

    Celebrity.create(data)
    .then(function (celebrity) {
        console.log(celebrity)
    })
    
})
.catch((err) => {
    console.log(err)
})
