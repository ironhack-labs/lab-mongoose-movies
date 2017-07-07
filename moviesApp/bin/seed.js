const Celebrity = require('../models/Celebrity');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/appMovies')
  .then(() => {
    let celebrities = [
      {
        name: 'Tarantino',
        occupation: "Director",
        catchPhrase: "Blood is red.",

      },
      {
        name: 'Johnny Deep',
        occupation: "Actor",
        catchPhrase:'Im the best'
      },
      {
        name: 'Falete',
        occupation: "CaraDura",
        catchPhrase:'Si no tiene dueño me lo como'
      },
    ];

    let celebritiesObj = celebrities.map( c => new Celebrity(c));

    celebritiesObj.forEach( c => c.save( (err, obj) =>{
      if(err){
        console.log(err);
      }else{
        console.log(`New celebrity created [${obj.name}] with ID:${obj._id}`);
      }
    }));

    //mongoose.connection.close();
  });
