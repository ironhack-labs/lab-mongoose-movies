const Celebrity = require('../models/Celebrity');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies-db')
  .then(() => {
    let celebrities = [
      { name: 'Beyoncé', occupation: 'singer', catchPhrase: 'I woke up like this' },
      { name: 'Someone', occupation: 'wadus', catchPhrase: 'Dolla$ign' },
      { name: 'Someone', occupation: 'wadus', catchPhrase: 'We are the best' }
    ];

    let celebrityObj = celebrities.map( e => new Celebrity(e));

    celebrityObj.forEach( e => e.save( (err, obj) =>{
      if(err){
        console.log(err);
      }else{
        console.log(`New celebrity created [${obj.name}] with ID:${obj._id}`);
      }
    }));
  });
