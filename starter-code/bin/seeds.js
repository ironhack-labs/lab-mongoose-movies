const mongoose = require('mongoose');
const Celebrity = require('../models/celebrities');
const Movie = require('../models/movies');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);


Celebrity.collection.drop()
Movie.collection.drop()

const celebrities = [
    {
        name: "Monsieur Toñio",
        occupation: "Chilling",
        catchPhrase: "Tourne un p'tit peu sur toi-même, t'es mignonne dans ton costume LVMHLM",
        movies: ["Monsieur Toñio & his friends","Un gilet jaune amoureux"]
    },
    {
        name: "Timo Cheper Salvador",
        occupation: "Kissing brasilian girls",
        catchPhrase: "C'est pas comme ça les déménagements",
        movies: ["Un gilet jaune amoureux"]
    },
    {
        name: "Don Pucci",
        occupation: "Kidding",
        catchPhrase: "J'ai fait une blague !"
    },
    {
        name: "Dusān",
        occupation: "Undefined",
        catchPhrase: "C'est nul."
    },
    {
        name: "Pouna Kha",
        occupation: "Drums",
        catchPhrase: "Bonsoir mademoiselle."
    }
];



const movies = [
    {
        image: "/images/monsieur-tonio.jpg",
        title: "Monsieur Toñio & his friends",
        genre: "Horror",
        plot: "Ouais ouais"
    },
    {
        image: "https://www.oxwork.com/media/catalog/product/image/gilet-haute-visibilite-portwest-junior-OXWORK-gilet_haute_visibilit_portwest_junior_jaune_face_resultat.jpg",
        title: "Un gilet jaune amoureux",
        genre: "Comedy",
        plot: "Somewehere in Paris during a demonstration, someone felt in love."
    }]



const createMovies = movies.map(movie => {
        const newMovie = new Movie (movie)
        return newMovie.save()
    })

    Promise.all(createMovies)
    .then(movies => {
        console.log(movies)

    const createCelebrities = celebrities.map(celebrity => {
        const moviesActed = movies.filter(movie => {
            if (!celebrity.movies) {
                return false
            }
            return celebrity.movies.includes(movie.title)
        })
        const newCelebrity = new Celebrity ({name: celebrity.name, occupation: celebrity.occupation, catchPhrase: celebrity.catchPhrase, moviesActed: moviesActed})
        return newCelebrity.save()
    })

    Promise.all(createCelebrities)
    .then(celebrities => {
        console.log(celebrities)
        mongoose.connection.close()
  })

})



