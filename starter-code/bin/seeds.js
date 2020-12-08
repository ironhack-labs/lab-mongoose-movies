// Iteration #1: The Celebrity Model

const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/starter-code', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));


  const CelebrityModel = require("./../models/Celebrity"); 


const celebrities = [
  { name: 'Saoirse Ronan', occupaton: 'actress', catchPhrase: 'Her first name Saoirse is Irish and means "Freedom". Her middle name Una is Irish and means "Unity". Her surname Ronan is also Irish and means "Little Seal".'},
  { name: 'Matthew McConaughey', occupaton: 'actor', catchPhrase: 'merican actor and producer Matthew David McConaughey was born in Uvalde,'},
  { name: 'Woody Allen', occupaton: 'director', catchPhrase: 'Woody Allen was born Allan Stewart Konigsberg on December 1, 1935 in Brooklyn, New York, to Nettie (Cherrie), a bookkeeper, and Martin Konigsberg, a waiter and jewellery engraver. '}
];


async function insertCelebrity() {
  try {
    await CelebrityModel.deleteMany(); 
    const inserted = await CelebrityModel.insertMany(celebrities); 
    console.log(`seed labels done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}


insertCelebrity();
