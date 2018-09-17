const mongoose = require('moongose');
const Celebrity = require('../models/Celebrity');

const dbName = 'movies';
mongoose.connect(`mongodb://localhost/${dbName} `);

const peliculas = [
  {
    name:'Tom Cruise',
    occupation:'Actor' ,
    catchPhrase:'mision imposible' 
  },{
    name:'Beyonce' ,
    occupation:'Cantante' ,
    catchPhrase: 'i don know'
  },{
    name:'Mia Khalifa',
    occupation:'Actriz' ,
    catchPhrase: 'Ah!!'
  }
];
Celebrity.create(peliculas, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${peliculas.length} movies`)
  mongoose.connection.close()
});