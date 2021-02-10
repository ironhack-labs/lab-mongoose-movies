const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model.js');
 
const DB_NAME = 'HollywoodDB';
 
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const hollywoodStars = [
    {
        name:"Rick Sanchez",
        occupation:"actor",
        catchPhrase:"wubbalubbadubdub"
    },
    {
        name:"Sirius",
        occupation:"Actor",
        catchPhrase:"black"
    },
    {
        name:"Adela",
        occupation:"Cantante",
        catchPhrase:"Poner fuego en la lluvia"
    }
]

Celebrity.create(hollywoodStars)
.then((e)=>{
    console.log(`Creaste ${e.length} celebridades`)
    mongoose.connection.close();
})
.catch(error=>{
    console.log(error)
})