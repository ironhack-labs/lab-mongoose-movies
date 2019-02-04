const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.js')

const dbName = 'myCelebs';
mongoose.connect(`mongodb://localhost/${dbName}`)

try { https://stackoverflow.com/questions/37136204/mongoerror-ns-not-found-when-try-to-drop-collection
  Celebrity.collection.drop()
}
catch {
  console.log("error droping collection. Maybe it doesn't exist?")
}

const celebrities = [
    {
        name: "David Bowie",
        occupation: "Singer",
        catchPhrase: "I'm an instant star"
    },
    {
        name: "Lou Reed",
        occupation: "Singer",
        catchPhrase: "Things always seem to end before they start"
    },
    {
        name: "Gary Oldman",
        occupation: "Actor",
        catchPhrase: "Reality TV to me is the museum of social decay."
    }
]

Celebrity.create(celebrities, (err) => {
    if (err) {throw(err)}
    mongoose.connection.close();
});