const mongoose = require('mongoose');

const CelebrityModel = require('../models/celebrity.js');

mongoose.connect ('mongodb://localhost/celebrity');

const celebrityArray = [
  {
    name: 'Denzel Washington',
    occupation: 'actor',
    catchPhrase: "King Kong ain't got shit on me!"
  },
  {
    name: 'Mark Whalberg',
    occupation: 'actor',
    catchPhrase: "I don't think you understand, these boys killed my dog."
  },
  {
    name: 'Al Pacino',
    occupation: 'actor',
    catchPhrase: "I always tell the truth. Even when I lie."
  }
];

CelebrityModel.create(
  celebrityArray,

  (err,celebrityAfterSave) => {
    if(err){
      console.log('Create Eerr');
      console.log(err);
      return;
    }
    celebrityAfterSave.forEach((oneCelebrity) => {
        console.log('New Celebrity ----> ' + oneCelebrity.name);
    });
  }
);
