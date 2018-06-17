const mongoose    = require('mongoose');
const faker       = require('faker');
const Celebrity   = require('../models/celebrity');
const Movie       = require('../models/movie');

const dbName = 'movies-celebs';

mongoose.connect(`mongodb://localhost/${dbName}`);

// get a random value from values array
function getRandomValue( arr ) {
  let randomNumber = Math.floor(Math.random() * arr.length );
  return arr[ randomNumber ];
}

// ----------------- creating CELEBRITIES
// create fake celebrity
function createCelebrity() {
  const celebrity = {};
  const occupations = ["singer", "comedian", "TV star" ];
  const genders = ["male", "female"];
  let fakeName = faker.name.findName();
  let fakeOccupation = getRandomValue( occupations );
  let fakePhrase = faker.lorem.sentence();
  celebrity.name = fakeName;
  celebrity.occupation = fakeOccupation;
  celebrity.catchPhrase = fakePhrase;
  return celebrity;
}

// create fake actor
function createActor() {
  const celebrity = {};
  let fakeName = faker.name.findName();
  let fakePhrase = faker.lorem.sentence();
  celebrity.name = fakeName;
  celebrity.occupation = 'actor';
  celebrity.catchPhrase = fakePhrase;
  return celebrity;
}

// create actress
function createActress() {
  const celebrity = {};
  let fakeName = faker.name.findName();
  let fakePhrase = faker.lorem.sentence();
  celebrity.name = fakeName;
  celebrity.occupation = 'actress';
  celebrity.catchPhrase = fakePhrase;
  return celebrity;
}

const celebrities = [];

// populate celebrities array with 10 objects
for (let i = 0; i < 10; i++) {
  celebrities.push( createCelebrity() );
}

// populate celebrities array with 10 actors
for (let i = 0; i < 10; i++) {
  celebrities.push( createActor() );
}

// populate celebrities array with 10 actresses
for (let i = 0; i < 10; i++) {
  celebrities.push( createActress() );
}

// ---------------- creating MOVIES
// create fake movie
function createMovie() {
  const movie = {};
  const genres = ["comedy", "drama", "action", "doc"];
  let fakeTitle = faker.lorem.sentence();
  let fakeGenre = getRandomValue( genres );
  let fakePlot = faker.lorem.sentence(4);
  movie.title = fakeTitle;
  movie.genre = fakeGenre;
  movie.plot = fakePlot;
  return movie;
}

const movies = []; 
// populate movies array with 50 objects
for (let i = 0; i < 50; i++) {
  movies.push( createMovie() );
}


Celebrity.collection.drop();
Movie.collection.drop();

Celebrity.insertMany( celebrities )
.then( celebritiesDocs => {
  console.log( "These are our celebs:", celebritiesDocs );
  Movie.insertMany( movies )
    .then( moviesDocs => {
      console.log( "These are our movies:", moviesDocs );
      mongoose.disconnect();
  } )
})
.catch( err => { throw err } );




