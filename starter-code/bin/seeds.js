// const mongoose = require('mongoose')
// const Celebrity = require('../models/Celebrity')

// const celebrityDocs = [{
//     name: 'Robbie Williams',
//     occupation: 'Singer',
//     catchPhrase: "Sing while you/'re winning"
// },
// {
//     name: 'Andrea Bocelli',
//     occupation: 'Singer',
//     catchPhrase: "Stratiacella"
// },
// {
//     name: 'Britney Spears',
//     occupation: 'Singer',
//     catchPhrase: "Hit me baby one more time"
// }]

// mongoose
// .connect('mongodb://localhost/celebrityInfo', {useNewUrlParser: true})
// .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//     return Celebrity.insertMany(celebrityDocs)
// })
// .then(celebrityDocs => {
//     console.log(celebrityDocs)
//     mongoose.disconnect()
// })
// .catch(err => {
//     console.error('Error connecting to mongo', err)
// });

const mongoose = require('mongoose')
const Movie = require('../models/Movie')

const movieDocs = [{
    title: 'Batman Forever',
    genre: 'sci fi',
    plot: 'the good guy wins'
},
{
    title: 'The Joker',
    genre: 'sci fi',
    plot: 'the bad guy wins'
},
{
    title: 'Frozen',
    genre: 'Fairytail',
    plot: 'Nobody dies and they all live a happy life'
}]

mongoose
.connect('mongodb://localhost/celebrityInfo', {useNewUrlParser: true})
.then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return Movie.insertMany(movieDocs)
})
.then(movieDocs => {
    console.log(movieDocs)
    mongoose.disconnect()
})
.catch(err => {
    console.error('Error connecting to mongo', err)
});