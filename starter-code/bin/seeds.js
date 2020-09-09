const mongoose = require('mongoose')
//const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');
const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const movies = [
  {title: 'Titanic',genre:'drama',plot:'lorem ipsum dolor'},
  {title: 'Beautiful Mind',genre:'documentry',plot:'lorem ipsum dolor sit elit'},
  {title:'Duvara Karsi',genre:'gerilim',plot:'lorem ipsum loss etidmf genik'}
]

Movie.create(movies)
.then(moviesFromDB=>{
  console.log(`Created ${moviesFromDB.length} movies`);
  mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while getting movies from the DB: ${err}`))


//const celebrities = [
//  {name:'Al Pacino',occupation:'artist',catchPhrase:'All I am what I m going after'},
//    {name:'Pele',occupation:'football player',catchPhrase:'Success is no accident'},{
  //  name: 'Michael Jackson',occupation:'Singer',catchPhrase:'Lies run sprints,but the truth runs marathons.'
  //  }
//]
     

//Celebrity.create(celebrities)
  //.then(celebritiesFromDB => {
    //console.log(`Created ${celebritiesFromDB.length} celebrities`);
   // mongoose.connection.close();
  //})
  //.catch(err => console.log(`An error occurred while getting celebrities from the DB: ${err}`));