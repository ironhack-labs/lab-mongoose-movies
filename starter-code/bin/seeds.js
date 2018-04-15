require("dotenv").config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const data = require('./data');

const dbURL = process.env.DBURL;

mongoose.connect(dbURL)
.then(() =>{
    console.log(`Connected to db ${dbURL}`);
    Celebrity.collection.drop();

    Celebrity.create(data)
    .then(function (celebrities) {
        console.log(celebrities)
    })
})
.catch((err) => {
    console.log(err)
});