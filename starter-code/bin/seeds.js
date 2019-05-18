const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity')

const dbName = 'Mis-Celebrities'
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Ana Perez",
    occupation: "actriz",
    catchPhrase: ""

  },
  {
    name: "Juan Palomo",
    occupation: "cocinero",
    catchPhrase: "yo me lo guiso, yo me lo como"


  },
  {
    name: "Aria Stark",
    occupation: "la puta ama",
    catchPhrase: "Se acerca el invierno"
  }
]


Celebrity.create(celebrities)
  .then(celebritiesCreated => {
    console.log(`Creadas ${celebritiesCreated.length} celebrities`)
    mongoose.connection.close()
  })
  .catch(err => console.log(`Hubo un error: ${err}`))