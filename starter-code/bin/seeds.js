const mongoose = require("mongoose");
const CelebrityModel = require("../models/Celebrities.js");

//console.log('in seeds.js file');

mongoose
  .connect('mongodb://localhost/starter-code', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });



const celebrities = [{
    name: "Chris Martin",
    occupation: "Singer",
    catchPhrase: "Viva la Vida"
  },
  {
    name: "Hayao Miyazaki",
    occupation: "Animator",
    catchPhrase: "J'ai fait une belle ballade !"
  },
  {
    name: "Cillian Murphy",
    occupation: "Actor",
    catchPhrase: "There is God and there is the Peaky Blinders"
  }
];

CelebrityModel.create(celebrities)
  .then(dbResult => {
    console.log("the celebrities have been inserted !");
  })
  .catch(dbErr => console.log(dbErr));