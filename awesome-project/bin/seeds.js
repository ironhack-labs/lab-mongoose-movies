const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'awesome-project';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Groucho Marx",
    ocupation: "Actor",
    catchPhrase: "Those are my principles, and if you don't like them...well I have others."
  },
  {
    name: "Charles Chaplin",
    ocupation: "Actor and director",
    catchPhrase: "Life is a beautiful magnificent thing, even to a jellyfish"
  },
  {
    name: "John Kennedy",
    ocupation: "President of the goverment",
    catchPhrase: "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them."
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});