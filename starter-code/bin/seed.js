const path = require('path');
require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require("../models/Celebrity")

const seed = [
  {
    name: "CelebDog",
    occupation: "Actor",
    catchPhrase: "Woof"
  },

  {
    name: "CelebCat",
    occupation: "Actor",
    catchPhrase: "Meow"
  },

  {
    name: "CelebHamster",
    occupation: "Comedian",
    catchPhrase: "*Squeak*"
  },

]

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

    Celebrity.insertMany(seed)
      .then(res => {
        console.log("Successfully seeded database");
      })
      .catch(err => console.error(err));
  })
    
  .catch(err => console.error('Error connecting to mongo', err));

// mongoose.connection.close()
//   .then(res=>{
//     console.log("Successfully closed DB")
//   })
//   .catch(err => console.error(err))