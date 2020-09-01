const Celebrity = require('../models/celebrity')
const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/starter-code', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const initialCelebrities = [
    {
        name: "Tom Cruise",
        occupation: "Actor",
        catchPhrase: "Make it count"
    },
    {
        name: "Elon Musk",
        occupation: "Entrepeneur",
        catchPhrase: "Wow, the stock is so high right now"
    },
    {
        name: "Brandon Flowers",
        occupation: "Musician",
        catchPhrase: "I've got soul but I'm not a soldier"
    }
]

async function seedDatabase(array){
    await Celebrity.insertMany(array)
    mongoose.connection.close() 
}

seedDatabase(initialCelebrities)