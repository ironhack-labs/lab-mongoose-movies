const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

const dbName = 'moviesCeleb';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
    {
        title: "Harry Potter y la piedra filosofal",
        genre: "Fantasia",
        plot: "Un niño con gafas que de repente es mago y le secuestran en un internado"
    },
    {
        title: "Midnight in Paris",
        genre: "Romance",
        plot: "Un tio se va de viaje a Paris con su novia, se mete en el coche de un extraño y viaja en el tiempo, conociendo a grandes artistas de epocas pasadas"
    },
    {
        title: "Colega donde esta mi coche",
        genre: "Comedia",
        plot: "Dos tios muy fumaos que pierden su coche, cuando esta aparcado en frente de su casa."
    },
]

Movie
    .create(movies)
    .then(allMoviesCreated => {
        console.log(`Created ${allMoviesCreated.length} movies`)
        mongoose.connection.close();
    })
    .catch(err => console.log('Hubo un error,', err))