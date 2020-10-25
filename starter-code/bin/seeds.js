const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movie.js');

mongoose.connect(`mongodb://localhost/starter-code`, { useNewUrlParser: true, useUnifiedTopology: true } );

// const celebrities = [
//     {
//         name: "Brad pitt",
//         occupation: "Actor",
//         catchPhrase: "American actor and producer"
//     },
//     {
//         name: "Tom Cruise",
//         occupation: "Actor",
//         catchPhrase: "American actor and producer"
//     },
//     {
//         name: "Matthew McConaughey",
//         occupation: "Actor",
//         catchPhrase: "American actor and producer"
//     }
// ]

const movies = [
    {
        title: "Seven",
        genre: "Chrime thriller",
        plot: "When retiring police Detective William Somerset (Morgan Freeman) tackles a final case with the aid of newly transferred David Mills (Brad Pitt), they discover a number of elaborate and grizzly murders. They soon realize they are dealing with a serial killer (Kevin Spacey) who is targeting people he thinks represent one of the seven deadly sins. Somerset also befriends Mills' wife, Tracy (Gwyneth Paltrow), who is pregnant and afraid to raise her child in the crime-riddled city."
    },
    {
        title: "Mission impossible",
        genre: "Action",
        plot: "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization."
    },
    {
        title: "Interstellar",
        genre: "Science fiction",
        plot: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home."
    }
]


// Celebrity.create(celebrities, (err) => {
//     if (err) { throw(err) }
//     console.log(`Created ${celebrities.length} celebrities`)
//     mongoose.connection.close();
//   });

Movie.create(movies, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close();
  });