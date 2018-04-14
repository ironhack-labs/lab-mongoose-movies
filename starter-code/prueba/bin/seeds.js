require("dotenv").config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const celebrities = require('./celebrity_data');
const dbURL = process.env.DBURL;

mongoose.connect(dbURL).then(() =>{
    console.log(`Connected to db ${dbURL}`);
    //Movie.collection.drop();
    console.log(celebrities)
    celebrities.forEach( celebrity => {
        console.log(celebrity)
            let celebrity_new = new Celebrity ({
                name: celebrity.name,
                occupation: celebrity.occupation,
                catchPhrase: celebrity.catchPhrase,
            })
            .save()
            .then( () => console.log("Created celebrity"))
        })
    })
    //mongoose.disconnect();

