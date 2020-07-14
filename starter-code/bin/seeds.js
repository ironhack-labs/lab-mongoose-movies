/*const celebritySeed = [
    {
        name: 'Roman',
        occupation: 'Comedian',
        catchPhrase: 'No news, good news'
    },
    {
        name: 'Tom Cruise',
        occupation: 'Actor',
        catchPhrase: 'Eat Pizza'
    },
    {
        name: 'Beyonce',
        occupation: 'Singer',
        catchPhrase: 'Single lady'
    }
];*/

const movieSeed = [
    {
        title: 'Too Fast Too Furious',
        genre: 'Action',
        plot: 'Cars, Races, Nitro and brrm brrrmm'
    },
    {
        title: 'Too Fast Too Furious 2',
        genre: 'Action',
        plot: 'More Cars, More Races, More Nitro and brrm brrrmm brrrrmmm'
    },
    {
        title: 'Too Fast Too Furious 3',
        genre: 'Action',
        plot: 'Even More Cars, Even More Races, Even More Nitro and brrm brrrmm brrrrmmmm brrrrrmmmm'
    }
];

const mongoose = require('mongoose');
//const Celebrities = require('../models/Celebrity.model');
const Movies = require('../models/Movie.model');

mongoose
  .connect('mongodb://localhost/mongoose-movies', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false // <-- added since we use `.findOneAndUpdate()`; check here for more info: https://mongoosejs.com/docs/api.html#mongoose_Mongoose-connects
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

  Movies.create(movieSeed)
.then((fb)=>{
    console.log(`successfully added seed ${fb}`);
    mongoose.connection.close();
})
.catch((error)=>console.log(error))

console.log('executed seeds');

