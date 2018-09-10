const mongoose = require('mongoose');


const Celebrity = require('../models/Celebrity');


mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/celebs-and-movies', {useMongoClient: true})
  .then(() => {



const tomCruise = {name: "Tom Cruise", occupation: "Crazy Guy Movie Star", catchphrase: "I'm not crazy"}

const angelina = {name: "Angelina Jolie", occupation: "She used to be in movies", catchphrase: "I'm angelina jolie"}

const stormTroop = {name: "Storm Trooper", occupation: "Missing shots", catchphrase: "Oh no, I missed!"}

const owenWilson = {name: "Owen Wilson", occupation: "Saying wow", catchphrase: "wow!"}



Celebrity.create([tomCruise, angelina, stormTroop, owenWilson])
.then((response)=>{
  console.log(response)
  mongoose.connection.close();
})
.catch((err)=>{
  console.log(err)
})


    // console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

