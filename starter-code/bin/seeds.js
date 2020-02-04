const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

mongoose.connect(`mongodb://localhost/celebrities`, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true
});

const celebrities = [
    {
        name: "Diego Luna",
        occupation: "actor",
        catchPhrase: "This role on the movie 'Y tu mama tambien' brought him international stardom"
    },
    {
        name: "Matt Damon",
        occupation: "actor",
        catchPhrase: "He is ranked most bankable star"
    },
    {
        name: "Jennifer Lopez",
        occupation: "actress",
        catchPhrase: "She is regarded as the most influential Hispanic performer in the United States"
    }
]

Celebrity.insertMany(celebrities)
.then(inserted => {
  console.log('success', inserted);
  mongoose.disconnect();
})
.catch(err => console.log(err));

