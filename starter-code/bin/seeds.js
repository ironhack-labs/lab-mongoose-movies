const mongoose = require('mongoose');
const Movies = require('../models/movies');

mongoose.connect(`mongodb://localhost/celebrity-project`, {
useCreateIndex: true,
useNewUrlParser: true,
useUnifiedTopology:true
}); 

const movies = [{

    title:'Pretty woman',
    genre: 'drama',
    plot: 'Plot is a literary term used to describe the events that make up a story, or the main part of a story. These events relate to each other in a pattern or a sequence.
    '
},
{
title: 'Titanic',
genre: 'drama',
plot: 'Plot is a literary term used to describe the events that make up a story, or the main part of a story. These events relate to each other in a pattern or a sequence.
'
},
{
    title: 'Parasite',
    genre: 'drama',
    plot: 'Plot is a literary term used to describe the events that make up a story, or the main part of a story. These events relate to each other in a pattern or a sequence.
    '

} ,
{
    title: 'Pulp Fiction',
    genre: 'drama',
    plot: 'Plot is a literary term used to describe the events that make up a story, or the main part of a story. These events relate to each other in a pattern or a sequence.
    '

}
]

// const Celebrity = require('../models/celebrity');

// mongoose.connect(`mongodb://localhost/celebrity-project`, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });


// const celebrity = [{
//     name: 'Trevor Noah',
//     occupation: 'comedian',
//     catchPhrase : 'Ooh, you are awful ... but I like you!'
// },
// {
//     name: 'Kim Kardashian',
//     occupation: 'unknown',
//     catchPhrase : 'Oh mann!'
// },
// {
//     name: 'Sheldon Cooper',
//     occupation: 'actor',
//     catchPhrase : 'Bazinga!'
// }
// ]

Movies.create(movies).then(() => {
    console.log(`Created ${movies.length} movies`);
    mongoose.connection.close();
  });



