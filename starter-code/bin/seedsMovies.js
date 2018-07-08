require('dotenv').config();


const mongoose = require('mongoose');
const Movie = require('../models/Movie');
const dbName = process.env.DBURL;

mongoose.connect(dbName);
mongoose.connect('mongodb://localhost:27017/movies_lab/movies', {useMongoClient: true});

const movies = [
    {
        title: "La vida es bella",
        genre: "Drama",
        plot:"La Segunda Guerra Mundial está a punto de estallar en Europa. Mientras tanto, Guido llega a un pueblo italiano con la intención de abrir una...",
     },
    {
        title: " Intocable",
        genre: "Comedy",
        plot:"Philippe (François Cluzet, 'No se lo digas a nadie') es un hombre adinerado que pertenece a la alta sociedad. Sin embargo, su vida cambiará",
    },
    {
        title: "Pulp Fiction",
        genre: "Suspense",
        plot:"Jules Winnfield (Samuel L. Jackson, Jackie Brown) y Vincent Vega (John Travolta, Grease) son dos asesinos a sueldo que trabajan a las órdenes del...",

},
];

Movie.collection.drop();


Movie.create(movies)
    .then (data =>{
        console.log(`Created ${data.length} movies`);
        mongoose.disconnect();
    })