require("dotenv").config();
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');


mongoose.connect('mongodb://localhost/starter-code', { useMongoClient: true })



const celebrities = [{
    name: "Jason Statham",
    occupation: "british actor and model",
    catchPhrase: "If you're going to do something, do it with style"

},
{
    name: "Cristiano Ronaldo",
    occupation: "Football player",
    catchPhrase: "I don't mind people hating me, because it pushes me"
},
{

    name: "Elon Musk",
    occupation: "business magnate, investor and engineer",
    catchPhrase: "Great companies are built on great products"

}
]

const movies = [{
    title: "Dunkirk",
    genre: "History",
    plot: "Allied soldiers from Belgium, the British Empire and France are surrounded by the German Army, and evacuated during a fierce battle in World War II.",
},
{
    title: "Avengers Infinity War",
    genre: "Action",
    plot: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
},
{
    title: "The Purge: Election Year",
    genre: "Sci-Fi",
    plot: "Former Police Sergeant Barnes becomes head of security for Senator Charlie Roan, a Presidential candidate targeted for death on Purge night due to her vow to eliminate the Purge.",

},
];


Celebrity.collection.drop();
Movie.collection.drop();

Celebrity.create(celebrities, (err, celebrities) => {
    if (err) {
        throw err;
    }
    console.log(`created${celebrities.length}celebrities`);
    mongoose.disconnect();
});

Movie.create(movies, (err, movies) => {
    if (err) { throw (err) }
    console.log(`Created ${movies.length} movies`);
    mongoose.disconnect(); });
