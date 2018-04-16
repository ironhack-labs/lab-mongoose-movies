require("dotenv").config()

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const celebrity_data = require("./celebrity_data");
const dbURL = process.env.DBURL;

mongoose.connect(dbURL)
  .then( () => {
    Celebrity.collection.drop();
    
    Celebrity.create(celebrity_data)
      .then( celebrities => {
        console.log(`DB Created, celebrities list: ${celebrities}`);
        mongoose.disconnect();
      })
      .catch(err => {
        console.log(err);
      })
  })
  .catch(err => {
    console.log(err);
  })