const Celebrity = require('../models/celebrity');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/celebrity-BBDD')
  .then(() => {
    let celebrity = [
      {
        name: 'Brad Pitt',
        ocupation: 'Actor',
        catchPhrase:'...'
      },
      {
        name: 'Julio Iglesias',
        ocupation: 'Singer',
        catchPhrase:'Y lo sabes...'
      },
      {
        name:'Will Smith',
        ocupation:'Actor',
        catchPhrase:' Hello'
      },
    ];

    let celebrityObj = celebrity.map( c => new Celebrity(c));

    celebrityObj.forEach( c => c.save( (err, obj) =>{
      if(err){
        console.log(err);
      }else{
        console.log(`New celebrity added [${obj.name}] with ID:${obj._id}`);
      }
    }));

  //mongoose.connection.close();
  });
