require('dotenv').config();


const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const dbName = process.env.DBURL;

mongoose.connect(dbName);

const celebrities = [
    {
        name: "Tom Cruise",
        ocupation: "Actor",
        catchPhrase:"La vida es bella",
     },
    {
        name:"Beyonce",
        ocupation: "Singer",
        catchPhrase: "Soy estupenda",
    },
    {
        name: "Kim Kaardashian",
        ocupation: "Unknown",
        catchPhrase:"Soy la mejor ",

},
];

Celebrity.collection.drop();


Celebrity.create(celebrities)
    .then (data =>{
        console.log(`Created ${data.length} celebrities`);
        mongoose.disconnect();
    })
