const Celebrity = require('../models/Celebrity');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/celebrities')
.then(() => {
  let celebrities = [
    {
      name: 'James Bond',
      occupation: 'actor',
      catchPhrase: 'whisky on the rocks',
    },
    {
      nname: 'Rafa Nadal',
      occupation: 'sports player',
      catchPhrase: 'Vamos!',
    },
    {
      name: 'Belen Estaban',
      occupation: 'actor',
      catchPhrase: 'Andreita',
    },
  ];

  let celebritiesObj =  celebrities.map( elementRecorrido => new Celebrity(elementRecorrido));

  celebritiesObj.forEach( elementRecorrido2 => elementRecorrido2.save( (err, pepe) =>{
    if(err){
      console.log(err);
    }else{
      console.log(`New celebrity named [${pepe.name}] with ID:${pepe._id}`);
    }
  }));
});
