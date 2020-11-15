const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');
const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);


const movies = [
    {
        title: 'Masacre in Las Vegas',
        genre: 'kids',
        plot: "A school trip to Vegas ends in tragedy when the bus driver decides to gamble the kids away"
    },
    {
        title: 'VirusX',
        genre: 'comedy',
        plot: 'Two unversity students develop a mortal virus that can kill humanity'
    },
    {
        title: 'Beyond the rainbow',
        genre: 'sci-fi',
        plot: 'A man in prision for a crime he did not commit is about to find out the truth of life'
        
    }
]

Movie 
    .create(movies)
    .then(allMoviesCreated => {
        console.log(`Created ${allMoviesCreated.length} movies`)
        mongoose.connection.close();
    })
.catch(err => console.log(err))

// const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity.model');
// const dbName = 'celebrities';
// mongoose.connect(`mongodb://localhost/${dbName}`);


// const celebrities = [
//     {
//         name: 'Paris Hilton',
//         occupation: 'other',
//         catchPhrase: "That's hot!"
//     },
//     {
//         name: 'Arnold Schwarzenegger',
//         occupation: 'actor',
//         catchPhrase: 'Hasta la vista baby!'
//     },
//     {
//         name: 'Oprah Winfrey',
//         occupation: 'other',
//         catchPhrase: 'Turn your wounds into wisdom'
        
//     }
// ]

// Celebrity 
//     .create(celebrities)
//     .then(allCelebritiesCreated => {
//         console.log(`Created ${allCelebritiesCreated.length} celebrities`)
//         mongoose.connection.close();
//     })
// .catch(err => console.log(err))