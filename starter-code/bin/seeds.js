const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'movies-app'
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Selena Gomez",
    occupation: 'singer, actress, model' ,
    catchPhrase: "Suzanne Collins",
    
  },
  {
    name: "George Harris",
    occupation: 'comedian' , 
    catchPhrase: "no lo logro",
    
  },
  {
    name: "The Rock",
    occupation: 'actor, papi chulo' ,     
    catchPhrase: "It Doesn’t Matter.",
    
  },
]


Celebrity.create(celebrities)
.then((result)=>{
    console.log(`created ${result.length} celebrities`);
    mongoose.disconnect();
})
.catch((err)=>{
    console.log(err)
})


//to run write this in the terminal where my bin folder is at: node bin/seeds.js