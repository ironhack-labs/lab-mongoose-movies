const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');
// node bin/seed.js
mongoose
  .connect('mongodb://localhost/celebrityDB', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// const celebrityArray =
//  [{
//   name: "daffy duck",
//   occupation: "duck quack",
//   catchPhrase: "it is duck season"
//  },
//  {
//   name: "bugs bunny",
//   occupation: "eat carrot",
//   catchPhrase: "whats up dog?"
//  },
//  {
//   name: "Speedy Gonzalez",
//   occupation: "eat cheese",
//   catchPhrase: "andale arriba! abajo"}
 
// ]

    const movieArray = [
        {
          title: "hunting season",
          genre: "cartoon violent",
          plot: "the duck get hurt"
        },
        {
          title: "the Martian",
          genre: "comedy",
          plot: "the martian lost"
        },
        {
          title: "El gato feroz",
          genre: "vilent pg18",
          plot: "el gato se muere de hambre"
        }
    ]
  
// node bin/seed.js
Movie.create(movieArray)
.then(()=>{
    console.log("yey it worked..");
    mongoose.connection.close();
})
.catch((err)=>{
  console.log("error en base semilla");
});