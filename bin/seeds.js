const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'movie-star';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  { name: "Anne Robinson",
    show: "The Weakest Link",
    phrase: "You are the Weakest Link! Goodbye!",
  },
  { name: "Henry Winkler",
    show: "Happy Days",
    phrase: "Aaay!",
  },
  { name: "Jim Parsons",
    show: "The Big Bang Theory",
    phrase: "Bazinga!",
  } ];

Celebrity.create(celebrities)
.then((result)=>{
    console.log(`created ${result.length} celebrity profiles`);
    mongoose.disconnect();
})
.catch((err)=>{
  console.log(err)
})

module.exports = Celebrity;
