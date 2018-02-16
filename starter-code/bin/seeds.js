const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/celebrity');
const Celebrity = require('../models/Celebrity');

const celebrities = [
  {
    name:'Homer',
    occupation:'character',
    catchPhrase:'Yahooo!'  
  },
  {
    name:'Rick Sanchez',
    occupation:'character',
    catchPhrase:'Wuba Lubba Dub' 
  },
  {
    name:'Morty',
    occupation:'character',
    catchPhrase:'OH Yeez!'  
  },

]

Celebrity.create(celebrities, function(err, result){
  if(err) console.log("Error", err);
  console.log('He logrado conectarme !', result);
});