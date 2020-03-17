const mongoose = require('mongoose');
const Movie = require('../models/MovieModel');

const dbName = 'MoviesandCelebrities';

mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true } );

const dbtitle = 'MoviesandCelebrities'

mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });

/*const celebrities = [{

    name: "Robert de Niro",
    occupation: "Actor",
    catchPhrase: "Are you there, lawyer?"

},
{   name: "Al Pacino",
    occupation: "Actor",
    catchPhrase: "Die, idiot"
},

{
    name: "Morgan Freeman",
    occupation: "Actor",
    catchPhrase: "I am too old for this"
}

]

Celebrity.create(celebrities, (err) => {
    if(err) {throw(err)}   
    console.log(`Created ${celebrities.length} in DB!`)
    mongoose.connection.close();
});*/

const movies = [{

    title: "Goodbye Lenin",
    genre: "Comedy",
    plot: "Russians"

},
{   
    title: "Frozen",
    genre: "cartoons",
    plot: "Icy"
},

{
    
    title: "Attack on Titan",
    genre: "Action",
    plot: "Blood"
}]

Movie.create(movies, (err) => {
    if(err) {throw(err)}   
    console.log(`Created ${movies.length} in DB!`)
    mongoose.connection.close();
});

