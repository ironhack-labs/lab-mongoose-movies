
require('dotenv').config();
const mongoose = require('mongoose');
const CelebrityModel = require('../models/Celebrity.model');

const addCelebrity = [
    {
        name: 'heath ledger',
        occupation: 'actor',
        catchPhrase: 'Why so serious? >:)'
    }];




    mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((self) => {
      CelebrityModel.create(addCelebrity)
        .then((dbResult) => {
          console.log(dbResult);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });