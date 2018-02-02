// Iteration #1
const mongoose = require('mongoose');
const Celebritie = require('../models/Celebritie');


mongoose.connect('mongodb://localhost/movies-dev').then(() => console.log("Conectado!"));


const celebritieData = [
  { name: 'Tom Cruise', occupation: 'actor', catchPhrase: 'OMG' },
  { name: 'Beyonce', occupation: 'singer', catchPhrase: 'WTF' },
  { name: 'Daffy Duck', occupation: 'comedian', catchPhrase: 'OK' }
];

Celebritie.collection.drop();

celebritieData.forEach( c => {
  console.log(c)
  let cel = new Celebritie(c);
  cel.save( (err, cele) => {

    if(err){
      throw err;
    }
    console.log(`Celebritie ${cele.name}`);

  });

} );



//mongoose.disconnect();
mongoose.connection.close();
