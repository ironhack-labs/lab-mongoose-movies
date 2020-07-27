const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');
const dbtitle = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });

const celebrities = [{

    name: "Brendan Gleeson",
    occupation: "Actor",
    catchPhrase: "Que los dioses mantengan a los lobos calmos y a las mujeres en nuestras camas"

},
{
    name: "Bruce Willis",
    occupation: "Actor",
    catchPhrase: "Violencia, mira, vivimos en un mundo violento, hombre. Este país fue fundado en la violencia"
},
{
    name: "Ronan Harris",
    occupation: "Musician",
    catchPhrase: "En Suecia la gente siempre empieza a cantar canciones infantiles suecas"
}
];

Celebrity.create(celebrities, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
});

const movies = [{
    title: "Green Zone",
    genre: "Action",
    plot: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, unde?"
},
{
    title: "The Last Boy Scout",
    genre: "Action",
    plot: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, unde?"
},
{
    title: "Noire",
    genre: "EBM",
    plot: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, unde?"
}

];
Movie.create(movies, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${movies.length} movies`);
    mongoose.connection.close();
});