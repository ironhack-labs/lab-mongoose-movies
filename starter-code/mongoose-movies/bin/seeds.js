const mongoose = require( "mongoose" );

const Celebrity = require( "../models/celebrity" );

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/mongoose-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });


const celebrities = [
    {
        name: "Sharon",
        occupation: "bitching",
        catchPhrase: "No lovin' without bitchin'"
    },
    {
        name: "Matthew",
        occupation: "probably exists, but unsure",
        catchPhrase: "Hey wussup"
    },
    {
        name: "Bob",
        occupation: "singer",
        catchPhrase: "Everything's gonna be alrite"
    }
];

Celebrity.create( celebrities )
    .then(() => {
        console.log( `Successfully created ${ celebrities.length } celebrities!` )
    })
    .catch(( err ) => {
        next( err );
    });