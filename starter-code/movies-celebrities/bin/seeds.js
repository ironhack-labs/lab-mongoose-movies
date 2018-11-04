const data = [
  {
    name : "Actor1",
    ocupation: "Singer",
    catchPhrase: "la la la la"
  },
  {
    name : "Actriz2",
    ocupation: "actor",
    catchPhrase: "mi frase estrella"
  },
  {
    name : "Jaimito",
    ocupation: "comedian",
    catchPhrase: "erase una vez"
  }
]

const mongoose = require('mongoose');

const celebritySchema = require ('../models/Celebrity');
const Celebrity = mongoose.model('Celebrity', celebritySchema);

mongoose.connect('mongodb://localhost/celebrity')
  .then(() => {
    console.log('Connected to Mongo!');
    
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

Celebrity.insertMany(data)
.then((result) => {
  result.forEach(celebrity => {
    console.log(celebrity.name)
  })
  mongoose.connection.close();
  console.log("conexion cerrada");
})
.catch((error) => {
  console.log('error to InsertMany:', error);
})

