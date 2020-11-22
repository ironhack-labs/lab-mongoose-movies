
const mongoose = require("mongoose")
let Celeb = require("../models/Celebrity.js")

//const DB_NAME = 'mongoose-movies';

mongoose
  .connect('mongodb://localhost/mongoose-movies',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));

let celebrities = [
    { 
      name: "Bob Marley", 
      occupation: "Singer", 
      catchPhrase: "Don't worry be happy" },
    { 
      name: "Jennifer Aniston", 
      occupation: "Actress", 
      catchPhrase: "The best smell in the world is that man that you love."},
    {
      name: "Jan Kraus",
      occupation: "Actor",
      catchPhrase: "Even failure can be fun."
    },
  ]

Celeb.create(celebrities)
  .then(() => {
    mongoose.connection.close()
  })
  .catch(() =>{
    console.log("Error. Something went wrong.")
  })

