const celebritySeed = [
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
];

const mongoose = require('mongoose');
const Celebrities = require('../models/celebrity.model');

mongoose
  .connect('mongodb://localhost/mongoose-movies', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false // <-- added since we use `.findOneAndUpdate()`; check here for more info: https://mongoosejs.com/docs/api.html#mongoose_Mongoose-connects
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

Celebrities.create(celebritySeed)
.then((fb)=>{
    console.log(`successfully added seed ${fb}`);
    mongoose.connection.close();
})
.catch((error)=>console.log(error))

console.log('executed seeds');

