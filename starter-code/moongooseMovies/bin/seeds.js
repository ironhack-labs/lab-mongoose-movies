const Celeb = require('../models/celebrity');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/moongoosemovies')

  .then(() => {
    let celebrities = [
      {
        name       : "David Hasselhoff",
        occupation      : "Actor/singer",
        catchPhrase   : "I am OK",
      },
      {
        name       : "Arnold Scharwzenegger",
        occupation      : "Body builder/actor",
        catchPhrase   : "I´ll be back",
      },
      {
        name       : "Amador",
        occupation      : "Fiction character",
        catchPhrase   : "Descapotao!",
      },
    ];

    let celebObj = celebrities.map( c => new Celeb(c));

    celebObj.forEach( c => c.save( (err, obj) =>{
      if(err){
        console.log(err);
      }else{
        console.log(`New celeb created [${obj.name}] with ID:${obj._id}`);
      }
    }));

    mongoose.connection.close();
  });
