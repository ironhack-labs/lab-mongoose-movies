const mongoose = require('mongoose');

const CelebrityModel = require('../models/celebrity-model.js');


mongoose.connect('mongodb://localhost/celebrity');


const celebrityArray = [
    {
      name: 'John Cena',
      occupation: 'Wrestler',
      catchPhrase: `You can't see me`
    },
    {
      name: 'DJ Khaled',
      occupation: 'DJ',
      catchPhrase: 'Anotha one'
    },
    {
      name: 'Amy Schumer',
      occupation: 'Comedian',
      catchPhrase: 'My vagina'
    }
];

CelebrityModel.create(
  // 1st argument -> array of products to save
  celebrityArray,

  // 2nd argument -> callback
  (err, celebrityAfterSave) => {
      if (err) {
          console.log('Create error 😅');
          console.log(err);
          return;
      }

      celebrityAfterSave.forEach((celebrity) => {
          console.log('New Celeb ---> ' + celebrity.name);
      });
  }
); 
