require("dotenv").config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const celebrity_data = require('./celebrity_data');

const dbURL = process.env.DBURL;
mongoose.connect(dbURL).then(() =>{
    console.log(`Connected to db ${dbURL}`);
    Celebrity.collection.drop();


    Celebrity.create(celebrity_data)
    .then((celebrity) => {
        console.log(celebrity)
    })
    .catch((err) => {
        console.log(err)
    })
    //mongoose.disconnect();
})