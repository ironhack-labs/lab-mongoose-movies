const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie')

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

/* const celebrities = [
    {
        name: "David Bowie",
        occupation: "Singer and actor",
        catchPhrase: "Dance, magic, dance!",
    },
    {
        name: "Jennifer Conelly",
        occupation: "Actress",
        catchPhrase: "Through dangers untold and hardships unnumbered...",
    },
    {
        name: "Bruce Willis",
        occupation: "Actor",
        catchPhrase: "Yippeekiyay, muddafukka",
    },
    {
        name: "Helen Mirren",
        occupation: "Actress",
        catchPhrase: "We are the kingdom",
    },
    {
        name: "Denzel Washington",
        occupation: "Actor",
        catchPhrase: "By my faith, same as me",
    },
    {
        name: "Camille Lou",
        occupation: "Singer, musical actress",
        catchPhrase: "Au diable",
    },
    {
        name: "Fabien Incardona",
        occupation: "Singer, musical actor",
        catchPhrase: "Je suis la guerre",
    },
    {
        name: "Molly Quinn",
        occupation: "Actress",
        catchPhrase: "Dad, is not that simple",
    },
    {
        name: "Michael Gruber",
        occupation: "Singer, dancer, musical actor",
        catchPhrase: "Are you blind when you're born?",
    },
    {
        name: "Florent Moth",
        occupation: "Singer, musical actor",
        catchPhrase: "C'est le bien qui fai mal",
    }
]*/

const Movies [
    {
        title: "Cats (1998)",
        genre: "Musical theatre",
        plot: "The aclaimed musical of A. L. Webber filmed in the londonian stage, with the bests among the bests actors from both Brodway and London casting."
    }
     {
        title: "La légènde du Roi Arthuhr",
        genre: "Musical theatre",
        plot: "A fresh-style, brand-new revision of the arthurian myths, with Florent Moth as the naive king Arthur, Zaho as the powerfull Morgane and Fabien Incardona in the role of the crazy king Meleagant. An spectacle you can't afford to lose!"
    }
      {
        title: "Labyrinth",
        genre: "Fantasy, adventure",
        plot: "Tired of her family, her babysitting duty and pretty much her life, Sarah make a call to the Gobling King from her favourite fantasy book... but what she will do when this Gobling King happends to be much more than a mere book character?"
    }
       {
        title: "Nightmare before Christmas",
        genre: "Slow-motion animation, fantasy, comedy",
        plot: "Being the King of Halloween, the Master of Terror and the Every-Year-Organizer of the party starts to be not enough for Jack Skellington... ah, but Halloween isn't the only party of the year. What Jack will do when he discovers the Christmas City and wishes to pose as what he believes is called Sandy Claws?"
    }
        {
        title: "El Zorro",
        genre: "Adventure",
        plot: "Don Diego de la Vega, a. k. a. el Zorro, is getting too old for this. Fortunately, it seems that his duty is coming to an end. Unfortunately, just at that end his worst enemy destroy his family. His wife is dead, his daughter kidnapped by his enemy, and being imprisioned for almost two decades are not enough to stop old Zorro to coming back. And coincidently, there is a young bandit named Alenjandro with his own vengance, and the qualities to become the next Zorro, under his guidance. Will master and pupil succed in their revenge?"
    }
]


Celebrity
    .create(celebrities)
    .then(allCelebritiesCreated => {
        console.log(`Created ${allCelebritiesCreated.length} celebrities`)
        mongoose.connection.close();
    })


    Movie
    .create(movies)
    .then(allMovies => {
        console.log(`Created ${allMovies.length} movies`)
        mongoose.connection.close()
    })
        
        
    .catch(err => console.log('Hubo un error,', err))