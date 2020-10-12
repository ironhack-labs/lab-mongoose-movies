//make sure db is connected while seeding
require('../config/db.config')

//get my model
let  CelebrityModel = require('../models/celebrity-model')
let mongoose = require('mongoose')

CelebrityModel.insertMany([
    {name: "Ryan G.", occupation: "Actor", catchPhrase: "I'm handsome"}, 
    {name: "Emma Stone", occupation: "Actress", catchPhrase: "Unkown"},
    {name: "Batman", occupation: "Hero", catchPhrase: "Hellooooo"}
])
    .then(() => {
        console.log('The data was added.')
        mongoose.connection.close()
    })
    .catch((err) => {
        console.log('Something went wrong', err)
    })