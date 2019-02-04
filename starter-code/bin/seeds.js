
// se utiliza para hacer pruebas.
//require("dotenv") mirar como se hace//
const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");


mongoose
   .connect(process.env.DB_URL, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  }); 

const dbName = "Celebrity";
mongoose.connect(`mongodb://localhost/${dbName}`)
  
const celebrities = [{
    name: "Lola Flores",
    occupation: "Artista",
    catchPhrase: "Una Crack"
  },
  {
    name: "Freddie Mercury",
    occupation: "El mejor cantante de la historis",
    catchPhrase: "I won't be a rock star. I will be a legend."
  },
  {
    name: "Isabel Allende",
    occupation: "Escritora",
    catchPhrase: "Todos tenemos una reserva de fuerza interior insospechada, que surge cuando la vida nos pone a prueba"
  }
];
Celebrity.create(celebrityArray, err => {
  if (err) {
    throw err;
  }
 
  mongoose.connection.close();
});