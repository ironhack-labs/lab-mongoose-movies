// Iteration #1
const Celebrity = require('../models/Celebrity'); //arreglar ruta
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies')
  .then(() => {
    const CelebrityData = [{
        name: 'Pierce Brosnan',
        occupation: "actor",
        catchPhrase: "The Son is here!"
      },
      {
        name: 'Adele',
        occupation: "singer",
        catchPhrase: "Simply the best"
      },
      {
        name: 'Luka Modric',
        occupation: "footballer",
        catchPhrase: "king of pass"
      }
    ];

    let CelebrityObj = CelebrityData.map((celeb) => new Celebrity(celeb));

    CelebrityObj.forEach((celeb) => celeb.save((err, obj) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`New Celebrity created [${obj.name}] with ID:${obj._id}`);
      }
    }));

    // Comment because ends before celeb.save 
    // mongoose.connection.close();
  });
