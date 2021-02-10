
const mongoose = require('mongoose');
require("../configs/db.config.js");

const Celebrity = require("../models/Celebrity.model.js");
const Movie = require("../models/Movie.model.js");
const Casting = require('../models/Casting.model')

const celebrities = [
    {
        name: "Arnold Schwarzenegger",
        occupation: 'actor',
        catchPhrase: "I'll be back"
    },
    {
        name: "David Prowse",
        occupation: 'actor',
        catchPhrase: "I am your father"
    },
    {
        name: "Marlon Brando",
        occupation: 'actor',
        catchPhrase: "I'm going to make him an offer he can't refuse"
    }
];

const movies = [
    {
        title: "The Terminator",
        genre: 'Science fiction',
        plot: "The Terminator is a 1984 American science fiction film directed by James Cameron. It stars Arnold Schwarzenegger as the Terminator, a cyborg assassin sent back in time from 2029 to 1984 to kill Sarah Connor (Linda Hamilton), whose son will one day save mankind from extinction by a hostile Artifical Intelligence in a post-apocalyptic future. Michael Biehn plays Kyle Reese, a soldier sent back in time to protect Sarah. The screenplay is credited to Cameron and producer Gale Anne Hurd, while co-writer William Wisher Jr. received a credit for additional dialogue. Executive producers John Daly and Derek Gibson of Hemdale Film Corporation were instrumental in financing and production."
    },
    {
        title: "The Empire Strikes Back",
        genre: 'Science fiction',
        plot: "The Empire Strikes Back, also known as Star Wars: Episode V – The Empire Strikes Back, is a 1980 American epic space opera film directed by Irvin Kershner and written by Leigh Brackett and Lawrence Kasdan, based on a story by George Lucas. Produced by Lucasfilm, it is the second film in the Star Wars film series (and the fifth chronologically) and the sequel to Star Wars (1977).[a] Set three years after the events of the first film, the plot sees the Galactic Empire hunting the scattered Rebel Alliance throughout the galaxy. While Darth Vader relentlessly pursues Luke Skywalker's friends—Han Solo, Princess Leia, and Chewbacca—Luke studies the Force under Jedi Master Yoda to prepare himself for his upcoming confrontation with Vader."
    },
    {
        title: "The Godfather",
        genre: 'American crime',
        plot: "The Godfather is a 1972 American crime film directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzo's best-selling 1969 novel of the same name. The film stars Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte, and Diane Keaton. It is the first installment in The Godfather trilogy. The story, spanning from 1945 to 1955, chronicles the Corleone family under patriarch Vito Corleone (Brando), focusing on the transformation of his youngest son, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss."
    }
]


Promise.all([
    Celebrity.deleteMany(),
    Movie.deleteMany(),
    Casting.deleteMany()
])
    .then(() => {
        return Celebrity.insertMany(celebrities)
    })
    .then((celebrities) => {
        celebrities.forEach(celebrity => console.log(`${celebrity.name} has been created`))

        return Movie.insertMany(movies)
            .then((movies) => {
                movies.forEach(({ title }) => console.log(`${title} has been created`))


                return Casting.insertMany(new Array(3).fill().map((_, i) => ({ // crea un array de 3 posiciones y lo rellena con el map. 
                    movie: movies[i].id,                                // ({}) con eso no hace falta poner el return ni las llaves.
                    celebrity: celebrities[i].id                        // Haciedo aquí return llega al siguiente .then     
                })))
            })
    })
    .then((castings) => {
        castings.forEach(casting => console.log(`Casting create with movie id: ${casting.movie} and celebrity id: ${casting.celebrity}`))
    })
    .catch(err => console.error(err))
    .finally(() => {
        mongoose.connection.close()
            .then(() => console.log('Succesfully disconnected from DB'))
            .catch((e) => console.log('Error diseconnecting from DB'))
            .finally(() => process.exit())
    })


