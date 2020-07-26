const mongoose = require("mongoose");
//const Celebrity = require("../models/celebrity");
const Movie = require ("../models/movie")

const dbtitle = "lab-movies"; 
mongoose.connect(`mongodb://localhost/${dbtitle}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
/* 
const celebrities = [
 {
    name: 'Arnold Schwarzenegger',
    occupation: 'actor',
    catchPhrase: "Hasta la vista, Baby"
},
{
    name: 'Marlon Brandon',
    occupation: 'actor',
    catchPhrase: "I'm going to make him an offer he can't refuse"
},
{ 
    name: 'Robert De Niro',
    occupation: 'actor',
    catchPhrase: "You talkin' to me?"
}
]; */


const movies = [
    {
       title: 'The Shawshank redemption',
       genre: 'drama',
       plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
   },
   {
       title: 'Fight Club',
       genre: 'action-suspense',
       plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
   },
   { 
       title: 'Inception',
       genre: 'sci-fi',
       plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
   }
   ];

/* Celebrity.create(celebrities, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
  });
   */
  Movie.create(movies, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Created ${movies.length} celebrities`);
    mongoose.connection.close();
  });