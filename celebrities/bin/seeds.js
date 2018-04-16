require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require('../models/Celebrity');
const data = require('./data');
const DBURL = 'mongodb://localhost/celebrities'



mongoose.connect(DBURL).then(() =>{
  console.log(`Connected to db ${DBURL}`);
  Celebrity.collection.drop();

  Celebrity.create(celebritiesArr, (err) => {
  if (err) { 
    throw(err) 
  } else {
    console.log("SE ha creado...");
    mongoose.connection.close();
  }
  });
});