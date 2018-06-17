const mongoose    = require('mongoose');
const faker       = require('faker');
const Celebrity   = require('../models/celebrity');

const dbName = 'movies-celebs';

mongoose.connect(`mongodb://localhost/${dbName}`);

// get a random value from values array
function getRandomValue( arr ) {
  let randomNumber = Math.floor(Math.random() * arr.length );
  return arr[ randomNumber ];
}

// create fake celebrity
function createCelebrity() {
  const celebrity = {};
  const occupations = ["singer", "actor", "comedian", "TV star" ];
  const genders = ["male", "female"];
  let fakeName = faker.name.findName();
  let fakeGender = getRandomValue( genders);
  let fakeOccupation = getRandomValue( occupations );
  let fakePhrase = faker.lorem.sentence();
  celebrity.name = fakeName;
  celebrity.gender = fakeGender;
  celebrity.occupation = fakeOccupation === 'actor' && fakeGender === 'female' ? 'actress' : fakeOccupation;
  celebrity.catchPhrase = fakePhrase;
  return celebrity;
}

const celebrities = [];

// populate celebrities array with 20 objects
for (let i = 0; i < 20; i++) {
  celebrities.push( createCelebrity() );
}

Celebrity.collection.drop();

Celebrity.insertMany( celebrities )
.then( celebritiesDocs => {
  console.log( "These are our celebs:", celebritiesDocs );
  mongoose.disconnect();
} )
.catch( err => { throw err } );