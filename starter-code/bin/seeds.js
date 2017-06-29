const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrities');

// we have to connect to the DB again here
// becuase seed.js is SEPARATE from app.js


const Celebrity = require('../models/celebrity.js');

const celebrityArray = [
  {
    name: 'Jim Jones ',
    occupation:  "Leader of Alternative Thinking",
    catchPhrase: "Hey man, does this Kool-Aid taste weird to you?"
  },
  {
    name: 'Ted Bundy',
    occupation:  "Student",
    catchPhrase: "I definitely peaked in college."
  },
 {
   name: 'Jeffery Dahmer ',
   occupation:  "Exotic Food Critic",
   catchPhrase: "Anyone have a napkin? This stuff tends to get all over the place."
 }
];



Celebrity.create(
  celebrityArray,     // 1st Argument -> array of product info objects
  (err, celebrityResults) => {    // 2nd Argument -> callback
    if (err){
      console.log('Database error.');
      return;
    }

    celebrityResults.forEach((oneCeleb)=> {
      console.log('New Celeb! '+ oneCeleb.name);
    });
  }
);
