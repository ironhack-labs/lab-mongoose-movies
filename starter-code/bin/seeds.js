const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
   name: "Sheldon Cooper",
   occupation: "scientist",
   catchPhrase: "Bazinga!"
  },
  {
    name: "Steve Urkel",
    occupation: "inventor",
    catchPhrase: "Did I do that?"
  },
  {
    name: "Joey Tribbiani",
    occupation: "actor",
    catchPhrase: "How you doin'?"
  }
]

Celebrity.create(celebrities)
.then (() => {
  console.log("Celebrities created")
})
.then (() => {
  mongoose.disconnect()
})
.catch (err => {
  console.log(err)
});


