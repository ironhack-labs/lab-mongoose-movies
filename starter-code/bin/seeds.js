require('dotenv').config();
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

const dbName = process.env.DBURL;
mongoose.connect('mongodb://localhost/celebrities').then(()=>console.log("conected").catch(err=>console.log(err)));


const celebrities = [
    {
      name: "Tom Cruise",
      occupation: "actor",
      catchPhrase: "Show me the money!"
    },
    {
      name: "Beyonce",
      occupation: "singer",
      catchPhrase: "Power means happiness; power means hard work and sacrifice"
    },
    {
      name: "Julia Roberts",
      occupation: "actor",
      catchPhrase: "The kind of energy i attract is very calm"
    },
  ];

  Celebrity.create(celebrities)
  .then (celebrities => {
      console.log(`created ${celebrities.length} celebrities`)
      
  })
  .catch(err => console.log(err))