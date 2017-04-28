// Iteration #1
///seeds is what saves the data into your database
const mongoose = require('mongoose');

//this is also in app.js since we are using the same database
mongoose.connect('mongodb://localhost/lab-mongoose-movies');

const Celebrity = require('..models/celebrity-model.js');


const celebrity = [
  {
    celebrityName: 'Selena Gomez',
    occupation: 'Actress and singer',
    catchPhrase: {type: String}
  },
  {
    celebrityName: 'Cristiano Ronaldo',
    occupation: 'Soccer player',
    catchPhrase: {type: String}
  },
  {
    celebrityName: 'Beyoncé',
    occupation: 'Singer, songwriter and actress',
    catchPhrase: {type: String}
  }
];


  // db.products.insertMany()
  //////////
  //////////||
Celebrity.create(celebrity, (err, celebrityDoc) => {
  if (err) {
    ///You can't throw the err in App.js because seeds runs in the terminal.
    throw err;
  }

  celebrityDoc.forEach((onecelebrity) => {
    ///this gives you feedback if it works
    console.log(`NEW Celeb ${oneCelebrity.celebrityName} -> ${oneCelebrity._id}`);
  });

  mongoose.disconnect();

});
