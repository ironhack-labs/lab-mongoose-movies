const mongoose = require('mongoose');

const CelebrityModel = require('../models/celebrity.js');

mongoose.connect('mongodb://localhost/mongoose-celebrities');

const celebArray = [
  {
    name: 'Beyonce Knowles',
    occupation: 'Business person',
    catchPhrase: 'I woke up like this.'
  },
  {
    name: 'Rihanna Fenty',
    occupation: 'Songwriter',
    catchPhrase: "I'm crazy and I don't pretend to be anything else."
  },
  {
    name: 'Miley Cyrus',
    occupation: 'Singer',
    catchPhrase: 'Life is all about having a good time.'
  }
];


CelebrityModel.create(

  celebArray,

  (err, celebsAfterSave) => {
    if(err){
      console.log('Error 😯');
      return;
    }

    celebsAfterSave.forEach((oneCeleb) => {
      console.log('Celebrity ----->' + oneCeleb.name);
    });
  }
); // close CelebrityModel.create( ...)
