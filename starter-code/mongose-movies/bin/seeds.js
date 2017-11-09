const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies', {
  useMongoClient: true
});

const Celebrity = require('../models/celebrity');

const celebrityArray = [{
    name: "santiago segura",
    occupation: "actor",
    catchPhrase: "nos hacemos unas pajillas"
  },
  {
    name: "chiquito de la calzada",
    occupation: "humorista",
    catchPhrase: "Quietorrrr..."
  },
  {
    name: "Jose",
    occupation: "pintor",
    catchPhrase: "Vamooos..."
  },
];

Celebrity.collection.drop();
Celebrity.create(celebrityArray, (err,data)=>{
  if(err){
    console.log("Error en seeds.js "+ err);
  }
  data.forEach((e)=>{
    console.log(e.name +", "+ e.occupation +", "+e.catchPhrase);
  });
});
