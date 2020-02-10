const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`)



const celebrities = [
    {
      name : "Ernest Hemingway",
      occupation: "escritor",
      catchPhrase: "Yo bebo para hacer mas interesantes a otras personas"
    },
    {
      name : "Maria Felix",
      occupation: "actriz",
      catchPhrase: "Eres como una herida en el dedo, no es mortal pero como jode"
    },
    {
      name : "The Rock",
      occupation: "actor",
      catchPhrase: "No te engañes con 5000 amigos en facebook, Jesus solo tenia 12 y aun asi lo traicionaron"
    }
  ]


  Celebrity.create(celebrities, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
  })