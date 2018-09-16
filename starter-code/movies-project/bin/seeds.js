require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie=require("../models/Movie")


const dbName = 'celebrities-project';
mongoose.connect(`mongodb://localhost/${dbName}`);



const celebrities=[
  {
    name:"Mario",
    occupation:"Plumber",
    catchPhrase:"It's me, Mario"
  },
  {
    name:"James Bond",
    occupation:"Secret agent",
    catchPhrase:"My name is Bond, James Bond"
  },
  {
    name:"Bart Simpson",
    occupation:"student",
    catchPhrase:"eat my shorts"
  }
];

const movies=[
  {
    title:"Super Mario brosh",
    genre:"action",
    plot:"Mario tries to save the princess peach from bowser"
  },
  {
    title:"Simpsons",
    genre:"comedy",
    plot:"we all know the plot"
  }
]

Celebrity.collection.drop();
Movie.collection.drop();

Celebrity.create(celebrities,(err)=>{
if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
})
Movie.create(movies,(err)=>{
    if(err) {throw(err)}
    console.log(`Created ${movies.length} movies`)
    mongoose.disconnect();
  })




