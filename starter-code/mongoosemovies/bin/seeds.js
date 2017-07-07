const Celebrity = require('../models/Celebrity');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/celebrities').then(() => {
    let celebrities = [
      {
        name: "Paquirrin" ,
        ocupation: "DJ",
        catchPhrase: "Habemus Paquirrin",
      },
      {
        name: "The Pope" ,
        ocupation: "Mensajero",
        catchPhrase: "Habemus Papa",
      },
      {
        name: "Julio Iglesias" ,
        ocupation: "Meme Creator",
        catchPhrase: "y tu lo sabes",
      },
    ];

    let celebrityObj = celebrities.map( p => new Celebrity(p));

    celebrityObj.forEach( p => p.save( (err, obj) =>{
      if(err){
        console.log(err);
      }else{
        console.log(`New celebrity created [${obj.name}] with ID:${obj._id}`);
      }
    }));

    //mongoose.connection.close();
  });
