const mongoose     = require('mongoose');
const Celebrity = require("../models/Celebrity");
mongoose
  .connect('mongodb://localhost/celebritys', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const celebritys = [{
    name: "Santiago Segura",
    ocupation: "Director",
    catchPhrase: "Amiguetes", 
  },
  {
    name: "Pablo Chapela",
    ocupation: "Actor",
    catchPhrase: "Aaaparcao", 
  },
  {
    name: "Julian Lopez",
    ocupation: "Actor",
    catchPhrase: "A topeeeeee", 
  }
  ]

  Celebrity.insertMany(celebritys);


