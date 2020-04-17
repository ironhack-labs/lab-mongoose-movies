const mongoose = require('mongoose')
const Celebrity = require('./../models/celebrity-model')

const dbTitle = 'mongoose_movies'
mongoose.connect(`mongodb://localhost/${dbTitle}`)

Celebrity.collection.drop()

const celebrities = [

  {
    name: "Petra Venj",
    occupation: "Queen's Wrath",
    catchPhrase: "I blame myself for all this."
  },

  {
    name: "Calus",
    occupation: "Emperor",
    catchPhrase: "Grow fat with strength!"
  },

  {
    name: "The Drifter",
    occupation: "Slimeball",
    catchPhrase: "Alright, alright, alright! Let's see what we got!"
  }

]

Celebrity.create(celebrities)
.then((celebrities) => {
  console.log(`${celebrities.length} celebrity entries created!`)
  mongoose.connection.close()
}).catch((err) => {
  console.log(`An error occurred upon seeding the database: ${err}`)
});