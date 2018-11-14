const mongoose = require('mongoose');
const Celebrities = require('../models/Celebrities');



mongoose.connect('mongodb://localhost/mongoose-movies', {useNewUrlParser: true})
.then(x => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(err => {
  console.error('Error connecting to mongo', err)
});

const celebrities = [
  {
    name : "Lebron James",
    occupation: "Athlete",
    catchPhrase: "Witness",
  },
  {
    name : "Gene Wilder",
    occupation: "Actor",
    catchPhrase: "The snozzberries taste like snozzberries!",
  },
  {
    name : "Frankie Valli",
    occupation: "Singer",
    catchPhrase: "I need you baby",
  },
];


Celebrities.create(celebrities)
  .then((response)=>{
      console.log(response);
  })
  .catch((err)=>{
    console.log(err);
  })