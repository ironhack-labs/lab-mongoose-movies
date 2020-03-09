const mongoose = require('mongoose');
//const Celebrity = require('./../models/Celebrity');
const Movie = require('./../models/Movie');

//const dbName = 'celebrityDb';
const dbMovName = 'moviesDb'

// const celebArray = [
//     {
//         name: "Judy Dench",
//         occupation: "Actress",
//         catchPhrase: "Quality never goes out of style"
//     },
//     {
//         name: "Helen Mirren",
//         occupation: "Actress",
//         catchPhrase: "Experience and common sense, and don't look back"
//     },
//     {
//         name: "Sofia Helin",
//         occupation: "Actress",
//         catchPhrase: "Scandinavian noir series come from the heart of Scandinavia"
//     }
// ];

const moviesArray = [
    {
        title: "No Country For Silly Men",
        genre: "Comedy",
        plot: "adfljadg ladkgjl;ajdg lk;adsjg jag asdg alkjlk" 
    },
    {
        title: "Wherever",
        genre: "Detective",
        plot: "wherewatewa aweteawaet awehtew whereeveer"
    },
    {
        title: "Everyone Else",
        genre: "Science Fiction",
        plot: "Elzen daoatea veryaeworneat aewlsese"
    },
    {
        title: "What Do You Want",
        genre: "Action & Suspense",
        plot: "Yoiuwenawt aotea whatyoafuiaet lajsg jlu"
    }
]

// ESTABLISH CONNECTION TO MONGO
mongoose.connect('mongodb://localhost/moviesDb', {useNewUrlParser: true})
.then(() => {

    // Create celebrities objects - this returns a promise
    // const promCeleb = Celebrity.create(celebArray)
    // return promCeleb; //forward the pending promise to the next 'then'
    const promMovie = Movie.create(moviesArray)
    return promMovie;
})
//the array of celebrities has been created and is forwarded from the previous 'then'
.then((createdMovies) => {
    console.log(`Number of movies: ${createdMovies.length}`);

    //CLOSE THE CONNECTION
    const pr = mongoose.connection.close();
    return pr
})
.then(()=> console.log('Connection closed')) 

.catch( (err) => console.error('Error connecting to mongo', err))