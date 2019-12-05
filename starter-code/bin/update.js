const Celeb    = require('../models/Celeb');
const Movie  = require('../models/Movie');
const mongoose = require('mongoose')




mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/starter-code', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')

    Movie.update({}, {star: '5de7edb32a30a6e9d6ec0728'}, )
    .then((x)=>{
        console.log('it worked', x)
    })




  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });
