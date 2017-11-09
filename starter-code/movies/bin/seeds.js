const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/farandula", {
  useMongoClient: true
});
const Celebrities = require("../model/celebrities");

const celebrities = [
  {
    name: 'Paco Martinez Soria',
    occupation: 'Emigrante',
    catchPhrase: 'Yo no tengo esa marcha'

  },
  {
    name: 'Steve Urkel',
    occupation: 'Vecino',
    catchPhrase: '¿He sido yo?'

  },
  {
    name: 'el Chavo',
    occupation: 'Estudiante',
    catchPhrase: 'No me simpatizas'
  },
]
//Celebrities.collection.drop();

Celebrities.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((celebrities) => {
    console.log(Celebrities);
  });

  mongoose.connection.close();
});