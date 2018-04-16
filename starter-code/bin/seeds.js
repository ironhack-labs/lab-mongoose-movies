const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity-model");

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
});

const arrayOfCelebrities =[
    {
        name: "Matt LeBlanc",
        occupation: "actor",
        catchPhrase: "How you doin'?"
    },{
        name: "Neil Patrick Harris",
        occupation: "actor",
        catchPhrase: "True story, bro"
    },{
        name: "Ryan Seacrest",
        occupation: "radio presenter",
        catchPhrase: "Seacrest out"
    }
];

Celebrity.create(arrayOfCelebrities)
.then(()=>{
    console.log(`Created ${arrayOfCelebrities.length} books`);
})
.catch(()=>{
    console.log("Creation Error", err);
})